const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService {
  verifyPermission(ressource, user) {
    if(!ressource) {
      throw new ResourceNotExistException();
    }

    if(ressource.user_id !== user.id) {
      throw new InvalidAccessException();
    }
  }
}

module.exports = new AuthorizationService();