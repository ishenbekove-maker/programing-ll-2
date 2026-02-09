import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  return (
   <section className="services">
  <div className="card">💡 Идеи</div>
  <div className="card">⚙️ Разработка</div>
  <div className="card">📈 Маркетинг</div>
</section>

  );
};

export default UserInfo;
