export const makeUsersQuery = ({ getUsersController }) =>
async () => await getUsersController()


export const makeUserQuery = ({ getUserController }) => 
async (_, { id }) => await getUserController(id)

