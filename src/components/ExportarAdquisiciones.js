import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function exportToExcel(data) {
  const header = Object.keys(data[0] || {});
  const rows = data.map(obj => header.map(key => obj[key]));
  let csvContent = '';
  csvContent += header.join(',') + '\n';
  rows.forEach(row => {
    csvContent += row.map(field => '"' + String(field || '').replace(/"/g, '""') + '"').join(',') + '\n';
  });
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'adquisiciones.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const ExportarAdquisiciones = () => {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, 'adquisiciones'));
    const data = querySnapshot.docs.map(doc => doc.data());
    exportToExcel(data);
    setLoading(false);
  };

  return (
    <div style={{ margin: '30px 0', textAlign: 'center' }}>
      <button onClick={handleExport} disabled={loading} style={{ padding: '12px 30px', borderRadius: 6, background: '#27ae60', color: '#fff', fontWeight: 'bold', border: 'none', fontSize: 18, cursor: 'pointer' }}>
        {loading ? 'Descargando...' : 'Descargar Excel de Adquisiciones'}
      </button>
    </div>
  );
};

export default ExportarAdquisiciones;
