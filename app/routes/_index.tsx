export default function Index() {

  return (
    <>
      <div className="container flex justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="content-box w-2/5 px-12 py-6 overflow-hidden">
          <h1 className="underline">Relax, <span>Breathe</span> &amp; Code.</h1>
          <p>Lorem ipsum</p>
          <div className="breathing-circle absolute top-1/2"></div>
        </div>
        <div className="portrait w-2/5">
          <img src="/home/lunex2pc.png" alt="" />
        </div>
      </div >
      <div className="fixed bottom-24 left-20">
        <img src="/home/lotus.png" alt="" className="rotate-6" />
      </div>
    </>
  );
}
