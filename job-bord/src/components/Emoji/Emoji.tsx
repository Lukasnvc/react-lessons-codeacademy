type Props = {
  symbol: string
}

const Emoji = ({ symbol }: Props) => {
  return (
    <span role="img">
      {symbol}
    </span>
  );
};

export default Emoji;
