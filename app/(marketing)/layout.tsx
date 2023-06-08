export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Route Group以下のすべてのページに作成したlayout.tsxファイルを適用することができます (account)
  return <div className="m-4 font-bold">{children}</div>;
}
