import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import {
  ACF_CATEGORIES,
  CATEGORIES_ORDER,
  checkItem,
  getArticles,
  getCategories
} from "../../reducers/checklist";
import I18n from "react-native-i18n";
import { connect } from "react-redux";
import { Img, Link, Txt } from "../../components";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import s from "./ChecklistStyles";
import { Images } from "../../themes";
import { DrawerButton } from "../../navigation/AppNavigation";
import Checkbox from "react-native-check-box";
import Color from "color";
import Spinner from "react-native-loading-spinner-overlay";
import flatten from "lodash/flatten";

// TODO use best practices on backend
const getCheckedItems = acf => {
  // it returns all checked items from all categories names from user acf
  return flatten(ACF_CATEGORIES.map(category => acf[category] || [] ));
};

class Checklist extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: null,
    headerTitle: I18n.t("checklistTitle"),
    headerLeft: <DrawerButton navigation={navigation} />
  });

  componentDidMount() {
    this.props.getCategories();
    this.props.getArticles();
  }

  render() {
    const {
      categories,
      articles,
      navigation,
      loading,
      acf,
      checkItem
    } = this.props;
    const checkedItems = getCheckedItems(acf);
    console.log(checkedItems);

    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.checklistBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          {CATEGORIES_ORDER.map(slug =>
            categories.find(item => item.slug === slug)
          )
            .filter(item => item)
            .map((category, i) => {
              const categoryArticles = articles.filter(item =>
                item.learn_categories.includes(category.id)
              );
              return categoryArticles.length ? (
                <View key={i} style={s.category}>
                  <View
                    style={[
                      s.categoryHead,
                      { backgroundColor: Color(category.acf.color).fade(0.7) }
                    ]}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={s.categoryIconWrapper}>
                      <Icon
                        style={[s.categoryIcon, { color: category.acf.color }]}
                        name="question-circle"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={s.videoIconWrapper}
                      onPress={() => {
                        Linking.openURL(category.acf.video);
                      }}>
                      <Icon
                        style={[s.videoIcon, { color: category.acf.color }]}
                        name="play-circle"
                      />
                    </TouchableOpacity>
                    <Txt.View
                      style={s.categoryName}
                      textStyle={[
                        s.categoryNameText,
                        { color: category.acf.color }
                      ]}>
                      {category.name.toUpperCase()}
                    </Txt.View>
                    <Img
                      source={{ uri: category.acf.icon.url }}
                      style={s.categoryImage}
                    />
                  </View>
                  {categoryArticles.map((article, j) => {
                    const checked = !!checkedItems.find(
                      item => item === article.id
                    );
                    return (
                      <Link
                        prefixType="checkbox"
                        key={j}
                        prefix={
                          <Checkbox
                            onClick={() =>
                              checkItem({
                                id: article.id,
                                title: article.title.rendered,
                                category: category.slug
                              })
                            }
                            isChecked={checked}
                            checkBoxColor={"#00D6FF"}
                          />
                        }
                        onClick={() =>
                          navigation.navigate("Article", {
                            article,
                            category,
                            checked
                          })
                        }
                        textStyle={[!article.checked && s.notChecked]}>
                        {article.title.rendered}
                      </Link>
                    );
                  })}
                </View>
              ) : null;
            })}
        </ScrollView>
        <Spinner visible={loading && !categories.length} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.checklist,
  acf: state.user.user.acf
});

const mapDispatchToProps = {
  getCategories,
  getArticles,
  checkItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
