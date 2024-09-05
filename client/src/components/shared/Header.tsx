interface IProps {
  name: string;
}

const Header = ({ name }: IProps) => {
  return <div className="text-2xl font-semi-bold text-gray-700">{name}</div>;
};

export default Header;
