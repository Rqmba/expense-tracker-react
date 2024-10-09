import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
  return (
    <>
          <h3>Ajoutez une nouvelle transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Texte</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Insérer texte..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Montant <br />
            (négatif - dépense, positif - revenu)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Insérer le montant..." />
        </div>
        <button className="btn">Ajouter une transaction</button>
      </form>
    </>
  )
}
