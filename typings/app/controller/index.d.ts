// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportProfile from '../../../app/controller/profile';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
    profile: ExportProfile;
    user: ExportUser;
  }
}
