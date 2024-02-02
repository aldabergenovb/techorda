function Table({ props }) {
  return (
    <div>
      <h1>Список СМИ на территорий Казахстана (данные из data.egov.kz)</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Наименование на казахском</th>
            <th scope="col">Территория</th>
            <th scope="col">Территория на казахском</th>
            <th scope="col">Вид СМИ</th>
            <th scope="col">Вид СМИ на казахском</th>
          </tr>
        </thead>
        <tbody>
          {props.map((smi) => (
            <tr key={smi.id}>
              <td>{smi.namesmi}</td>
              <td>{smi.namesmikaz}</td>
              <td>{smi.territory}</td>
              <td>{smi.territoryk}</td>
              <td>{smi.vidsmi}</td>
              <td>{smi.vidsmikaz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
