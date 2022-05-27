
class AuthorizationService {
  verifyPermission(ressource, user) {
    if(ressource.user_id !== user.id) {
      throw new Error(); //: todo: invalidaccess exeption;
    }
  }
}

module.exports = AuthorizationService;