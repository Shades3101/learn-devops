import { prisma } from "@repo/db"

export default async function Home() {

  const user = await prisma.user.findFirst();

  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }}>
    <div style={{
      border: "1px solid white",
      padding: "20px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <div>Username: {user?.username}</div>
      <div>Password: {user?.password}</div>
    </div>
  </div>
}
