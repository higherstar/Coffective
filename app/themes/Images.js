// static svgs doesn't work for release build on Android using react-native-svg-uri
const images = {
  welcomeBackground: require('../static/welcome_background.jpg'),
  logo: require('../static/logo_coffective.png'),
  guideBackground: require('../static/guide_background.png'),
  loginBackground: require('../static/login_background.png'),
  forgotPasswordBackground: require('../static/forgot_password_background.png'),
  personTypeBackground: require('../static/person_type_background.png'),
  nameBackground: require('../static/name_background.png'),
  stateBackground: require('../static/state_background.png'),
  ageBackground: require('../static/age_background.png'),
  expectationBackground: require('../static/expectation_background.png'),
  registerBackground: require('../static/register_background.png'),
  homeBackground: require('../static/home_background.png'),
  buildTeamBackground: require('../static/build_team_background.png'),
  faqBackground: require('../static/faq_background.png'),
  checklistBackground: require('../static/checklist_background.png'),
  checklistItemBackground: require('../static/checklist_item_background.png'),
  howItWorksBackground: require('../static/how_it_works_background.png'),
  findSupportBackground: require('../static/find_support_background.png'),
  wicBackground: require('../static/wic_background.png'),
  hospitalBackground: require('../static/hospital_background.png'),
  hospital: require('../static/hospital.png'),
  championBackground: require('../static/champion_background.png'),
  champion: require('../static/champion.png'),
  expectation: {
    birth: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/birth.svg' },
    month1: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/1month.svg' },
    month2: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/2month.svg' },
    month3: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/3month.svg' },
    month4: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/4month.svg' },
    month5: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/5month.svg' },
    month6: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/6month.svg' },
    month7: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/7month.svg' },
    month8: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/8month.svg' },
    month9: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/9month.svg' },
  },
  personTypes: {
    mother: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/mother.svg' },
    parent: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/parent.svg' },
    nurse: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/nurse.svg' },
    friend: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/friend.svg' },
    provider: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/provider.svg' },
    other: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/other.svg' },
  },
  ages: {
    under15: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/under15.svg' },
    '16-18': { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/16-18.svg' },
    '18-25': { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/18-25.svg' },
    '25-35': { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/25-35.svg' },
    '35-45': { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/35-45.svg' },
    '50+': { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/50.svg' },
  },
  article: {
    for_baby: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/for_baby.svg' },
    for_mother: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/for_mother.svg' },
    for_champion: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/for_champion.svg' },
  },
  menu: {
    home: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/home-2.svg' },
    ask_questions: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/ask_questions.svg' },
    build_your_team: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/build_your_team.svg' },
    checklist: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/checklist.svg' },
    settings: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/settings.svg' },
    start_here: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/start_here.svg' },
    find_support: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/find_support.svg' },
  },
  slideArrowLeft: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/slider_arrow_left.svg' },
  slideArrowRight: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/slider_arrow_right.svg' },
  states: {
    AK: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/AK.svg' },
    AL: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/AL.svg' },
    AR: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/AR.svg' },
    AZ: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/AZ.svg' },
    CA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/CA.svg' },
    CO: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/CO.svg' },
    CT: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/CT.svg' },
    DE: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/DE.svg' },
    FL: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/FL.svg' },
    GA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/GA.svg' },
    HI: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/HI.svg' },
    IA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/IA.svg' },
    ID: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/ID.svg' },
    IL: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/IL.svg' },
    IN: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/IN.svg' },
    KS: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/KS.svg' },
    KY: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/KY.svg' },
    LA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/LA.svg' },
    MA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MA.svg' },
    MD: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MD.svg' },
    ME: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/ME.svg' },
    MI: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MI.svg' },
    MN: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MN.svg' },
    MO: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MO.svg' },
    MS: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MS.svg' },
    MT: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/MT.svg' },
    NC: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NC.svg' },
    ND: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/ND.svg' },
    NE: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NE.svg' },
    NH: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NH.svg' },
    NJ: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NJ.svg' },
    NM: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NM.svg' },
    NV: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NV.svg' },
    NY: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/NY.svg' },
    OH: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/OH.svg' },
    OK: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/OK.svg' },
    OR: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/OR.svg' },
    PA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/PA.svg' },
    RI: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/RI.svg' },
    SC: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/SC.svg' },
    SD: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/SD.svg' },
    TN: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/TN.svg' },
    TX: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/TX.svg' },
    UT: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/UT.svg' },
    VA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/VA.svg' },
    VT: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/VT.svg' },
    WA: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/WA.svg' },
    WI: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/WI.svg' },
    WV: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/WV.svg' },
    WY: { uri: 'https://new.coffective.com/wp-content/uploads/2018/04/WY.svg' },
  },
  buildMyTeamBackground: require('../static/build_your_team.png'),
  checkcListBackground: require('../static/check_list.png'),
  holdeNameGradient: require('../static/holdename.png'),
}

export default images
