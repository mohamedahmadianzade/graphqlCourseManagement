import { gql } from '@apollo/client';
const ListCourseQuery = gql`
query course {
  course {
    message
    data {
      name
      teacher
      price
    }
  }
}
`
export default ListCourseQuery