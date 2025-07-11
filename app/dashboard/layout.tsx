// app/dashboard/layout.tsx
import Header from './_components/Header';
import SideNav from './_components/SideNav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-slate-100 h-screen'>
      <div className="md:w-64 hidden md:block fixed h-full">
        <SideNav/>
      </div>
      <div className="md:ml-64">
        <Header/>
      {children}
      </div>
    </div>
  );
}