export const makeRegisterMutation = ({ registerController }) => 
async (_, args) => await registerController(args)
