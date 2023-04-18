import { useAuthContext } from '../context/AuthContext';
import * as userService from '../services/user.service';

const useUser = () => {
  const { user } = useAuthContext();

  const createUser = async (uid: string, email: string | null): Promise<void> => {
    return userService.createUser(uid, email);
  };

  const getUserToDos = async () => {
    const toDos = [];

    // Retrieve all documents in the toDos collection
    const toDosSnapshot = await userService.getUserToDos(user.uid);

    toDosSnapshot.forEach((doc) => {
      toDos.push({ id: doc.id, ...doc.data() });
    });

    return toDos;
  };

  return {
    createUser,
    getUserToDos,
  };
};

export default useUser;
