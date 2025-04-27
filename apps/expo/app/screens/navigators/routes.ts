// import { ICountrySummaryData } from '../home/components/CountrySummary'

export type RootStackParamList = {
  // Starter
  ProfileScreen: undefined
  HomeScreen: undefined
  LoginScreen: undefined
  SignupScreen: undefined
  OnboardingScreen: undefined
  AuthenticationScreens: undefined
  AuthenticatedStackScreens: undefined
  TestScreen: undefined
  ChatScreen: undefined
  TeamMatchingScreen: undefined
  // ///////////////////////
  Apps: undefined

  Test: undefined
  MapsApplicationCardScreen: undefined

  TabHome: undefined
  HomeStack: undefined
  CountrySelector: undefined
  InteractiveMap: undefined
  CountrySummary: undefined | { countrySummaryData: ICountrySummaryData }
  AiChat: undefined
  AiWelcome: undefined

  Refill: undefined
  KoosmikPayScreen:
    | undefined
    | {
        badgeId: string
        amount: string | number
        currency: 'XOF' | 'XAF'
        startPeriod: string
        endPeriod: string
        price?: number
      }

  HistoryStack: undefined
  History: undefined
  HistoryDetails:
    | undefined
    | {
        badgeId?: string
        historyId: string | number
        type: 'recharge' | 'consumption'
      }
  ManagerHistoryDetails: undefined | { historyUuid: string }
  Profile: undefined
  Account: undefined
  Settings: undefined

  StackScreen: undefined
  Home: undefined

  Authentication: undefined
  Registration: undefined | { isAfterConfirmationGestionnaire: boolean }
  Login: undefined
  GestionnaireAuth: undefined
  ConfirmCode2FA:
    | undefined
    | { phoneNumber: string; successText?: string; navigationRoute?: string }

  Gestionnaire: undefined
  GestionnaireMainDashboard: undefined
  WaterPoints: undefined
  WaterPointsList: undefined
  WaterPointDetails: undefined
  AssociatedClientsList: undefined
  AddNewUser: undefined
  ManagerNotifications: undefined
  AddNewBadge: undefined

  AuthedScreens: undefined

  SplashLoader: undefined
  // Profile: { userId: string };
}
