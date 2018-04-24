// @flow
import React from "react";
import { Image, ScrollView, View, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { Button, Card, Img, List, Txt } from "../../components";
import s from "./TeamItemStyles";
import { getNumber } from "../../reducers/teamitem";
import { Images } from "../../themes";
import UserIcon from "./../../static/users.png";
import Arrow from "./../../static/arrow.png";
import { BackButton } from "../../navigation/AppNavigation";

class TeamItem extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: null,
    headerTitle: navigation.state.params.category.title.rendered,
    headerLeft: <BackButton navigation={navigation} />
  });

  componentDidMount() {
    console.log(this.props.getNumber());
  }

  render() {
    const { navigation, number } = this.props;
    const { category } = navigation.state.params;
    const actions = {
      "choose-your-hospital": [
        <Button
          key="1"
          size="sm"
          outline
          type="primary"
          onClick={() => navigation.navigate("FindSupport")}>
          See hospitals in your area
        </Button>
      ]
    };

    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image style={s.backgroundImage} source={Images.wicBackground} />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <Card
            style={s.card}
            cover={
              <Img style={s.image} source={{ uri: category.acf.top_banner }} />
            }
            actions={actions[category.slug] || []}>
            <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>
              {category.title.rendered}?
            </Txt.View>
            <Txt.View
              style={s.cardDescription}
              textStyle={s.cardDescriptionText}>
              We are here to help provide the information and support you need.
            </Txt.View>
          </Card>

          <Card style={s.card}>
            <View style={s.headView}>
              <Txt.View
                style={[s.cardTitle]}
                textStyle={[s.houseHoldText, s.cardDescription]}>
                <Image source={UserIcon} style={s.userIcon} />
                <Txt.View style={s.textHead}>Household members: 0</Txt.View>
              </Txt.View>

              <Image source={Arrow} style={s.arrowIcon} />
            </View>

            <View style={s.flex}>
              <ImageBackground
                style={s.houseHoldCard}
                source={Images.holdeNameGradient}>
                <Txt.View>$37,167</Txt.View>
                <Txt.View>PER YEAR</Txt.View>
              </ImageBackground>

              <ImageBackground
                style={s.houseHoldCard}
                source={Images.holdeNameGradient}>
                <Txt.View>$37,167</Txt.View>
                <Txt.View>PER MONTH</Txt.View>
              </ImageBackground>

              <ImageBackground
                style={s.houseHoldCard}
                source={Images.holdeNameGradient}>
                <Txt.View>$37,7</Txt.View>
                <Txt.View>PER WEEK</Txt.View>
              </ImageBackground>
            </View>

            <Txt.View style={s.houseHoldIncome}>
              Is your household income below the figures? If so, then you
              qualify for WIC benefits.
            </Txt.View>
          </Card>

          <Button style={s.buttomSpecial} type="primary">
            I QUALIFY, CHOOSE MY CLINIC
          </Button>
          <Button style={s.buttomSpecial}>I DON’T QUALIFY</Button>

          {/* {!!category.acf.wic_offers && (
            <Card style={s.card} title={'WIC Offers'}>
              <Txt.View textStyle={s.cardDescriptionText}>{category.acf.wic_offers}</Txt.View>
            </Card>
          )} */}
          {/* {!!category.acf.wic_provides && (
            <Card style={s.card} title={'WIC Providers'}>
              <Txt.View textStyle={s.cardDescriptionText}>{category.acf.wic_provides}</Txt.View>
              <List
                style={s.list}
                data={category.acf.wic_provides_list}
                keyExtractor={(item, i) => i}
                titleProp='line'
              />
            </Card>
          )}
          {!!category.acf.wic_at_work && (
            <Card style={s.card} title={'WIC at Work'}>
              <Txt.View textStyle={s.cardDescriptionText}>{category.acf.wic_at_work}</Txt.View>
              <List
                style={s.list}
                data={category.acf.wic_at_work_list}
                keyExtractor={(item, i) => i}
                titleProp='line'
              />
            </Card>
          )}
          {!!category.acf.list && (
            <Card style={s.card} title={category.acf.list_title[0].title}>
              <List style={s.list} data={category.acf.list} keyExtractor={(item, i) => i} titleProp='line' />
            </Card>
          )} */}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.number
});

const mapDispatchToProps = {
  getNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamItem);
