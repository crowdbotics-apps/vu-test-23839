import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps192998Navigator from '../features/Maps192998/navigator';
import ArticleList192977Navigator from '../features/ArticleList192977/navigator';
import ArticleList192976Navigator from '../features/ArticleList192976/navigator';
import ArticleList192975Navigator from '../features/ArticleList192975/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps192998: { screen: Maps192998Navigator },
ArticleList192977: { screen: ArticleList192977Navigator },
ArticleList192976: { screen: ArticleList192976Navigator },
ArticleList192975: { screen: ArticleList192975Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
