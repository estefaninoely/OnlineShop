import useStore from "../context/store";

function Shopping() {
  const { cart } = useStore();
  return (
    <div>
      hello shopping
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div className="text-blue-700">{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
