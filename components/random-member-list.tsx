interface Member {
  id: string;
}
export const RandomMemberList = ({ list }: { list: Member[] }) => {
  const randomList = list.sort(() => Math.random() - 0.5);
  return (
    <ul>
      {randomList.map((x) => (
        <li key={x.id}>
          <a href={`https://github.com/${x.id}`} target="_blank" rel="nofollow">
            {x.id}
          </a>
        </li>
      ))}
    </ul>
  );
};
