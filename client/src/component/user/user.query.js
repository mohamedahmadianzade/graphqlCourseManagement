import { gql } from '@apollo/client';
const ListUserQuery = gql`
query User {
  user {
    message
    data {
      userId
      name
      username
    }
  }
}
`

const CreateUserQuery = gql`
    mutation signUp($name:String,$username:String,$password:String) {
        signUp(name:$name,username:$username,password:$password)
            {
              data{
                userId,
                name,
                username
              }
              message
            }
        }
`

export {
  ListUserQuery,
  CreateUserQuery
} 