import TicTacToe from '@/components/TicTacToe';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Tic-tac-toe</h1>
      <TicTacToe />
    </main>
  );
}
