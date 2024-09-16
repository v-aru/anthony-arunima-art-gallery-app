import Title from "@/components/Title/Title";
import UsersList from "@/components/UsersList/UsersList";

function UsersPage({ data }) {
  return (
    <>
      <Title line1="B R U S H &nbsp; 'N' &nbsp; B Y T E " line2="U S E R S" />
      <UsersList users={data} />
    </>
  );
}

export default UsersPage;
