const Page = ({ params }: { params: { id: string, userId: string, categoryId: string} }) => {
  console.log(params); // { id: '1', userId: '2', categoryId: '3' }
  return (
    <div className="m-4 font-bold bg-gray-800 text-white p-6 rounded-lg">
      <div className="text-2xl mb-4">Blog ID: {params.id}{params.userId}{params.categoryId}</div>
      <div>
        /blog/1/2/3でページを表示させるためには[id]ディレクトリの下に[userId]、さらにその下に[categoryId]を作成して[categoryId]の下にpage.tsxファイルを作成します。
      </div>
    </div>
  );
};

export default Page;
