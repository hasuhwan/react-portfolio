import Header from "../header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="layout w-full flex flex-col items-center">
      <Header />
      <main className="w-[1100px] flex flex-col items-center">
        {props.children}
      </main>
    </div>
  );
}
