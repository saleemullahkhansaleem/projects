import { useEffect, useState } from "react";

const CashManager = () => {
  const [billAmount, setBillAmount] = useState(+"");
  const [cashAmount, setCashAmount] = useState(+"");
  const [noteDetail, setNoteDetail] = useState([]);
  const notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
  useEffect(() => {
    // console.log(billAmount, cashAmount);
    manageNotes(billAmount, cashAmount);
  }, [billAmount, cashAmount]);

  const manageNotes = (bill, cash) => {
    setNoteDetail([]);
    let changeAmount = cash - bill;
    notes.map((note) => {
      if (changeAmount >= note) {
        let noteCount = Math.floor(changeAmount / note);
        setNoteDetail((prv) => [...prv, { note: note, noteCount: noteCount }]);
        changeAmount -= note * noteCount;
      }
    });
  };
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center">
      <form className="rounded shadow p-4 flex flex-col gap-4 bg-zinc-700 w-80">
        <h2 className="text-xl">Manage the cash register</h2>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <label htmlFor="bill_amount">Bill amount</label>
            <input
              className="w-full rounded-l bg-zinc-800 outline-none py-2 px-4"
              type="number"
              name="bill_amount"
              id="bill_amount"
              value={billAmount || ""}
              placeholder={0}
              onChange={(e) => setBillAmount(e.target.value)}
            />
          </div>
          {billAmount ? (
            <div className="flex flex-col gap-2">
              <label htmlFor="cash_amount">Cash given</label>
              <input
                className="w-full rounded-r border-l border-zinc-700 bg-zinc-800 outline-none py-2 px-4"
                type="number"
                name="cash_amount"
                id="cash_amount"
                value={cashAmount || ""}
                placeholder={0}
                onChange={(e) => setCashAmount(e.target.value)}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h3 className="text-lg">
            Remaining Amount: {cashAmount - billAmount}
          </h3>
          {noteDetail.length > 0 && <h3 className="text-lg">Note details</h3>}
          <table>
            <tbody>
              {noteDetail?.map((note) => (
                <tr key={note.note}>
                  <td className="px-4">{note?.note}</td>
                  <td className="px-4">{note?.noteCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default CashManager;
