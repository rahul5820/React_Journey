import proptypes from 'prop-types'
function List(props) {
  const fruitlist = props.items;
  const category = props.category;

  const lowCalItem = fruitlist.filter((items) => items.calories > 60);

  const listItem = lowCalItem.map((items) => (
    <li key={items.id}>
      {items.Name.toLocaleUpperCase()}:&nbsp;<b>{items.calories}</b>
    </li>
  ));


 

  return (
    <>
      <h3 className="List-category">{category}</h3>
      <ol className="List-item">{listItem}</ol>
    </>
  );
}
List.propTypes={
  category:proptypes.string,
  items:proptypes.arrayOf(proptypes.shape({id:proptypes.number,name:proptypes.string,calories:proptypes.dstring}))
}

export default List;

// fruits.sort((a,b)=> a.Name.localeCompare(b.Name)) // alphbatical
// fruits.sort((a,b)=> a.calories-b.calories) //number
// const lowCalfruit=fruits.filter(fruit=> fruit.calories<=50)

// const listem = lowCalfruit.map(lowCalfruit => <li key={lowCalfruit.id}>{lowCalfruit.Name.toUpperCase()}:&nbsp;<b>{lowCalfruit.calories}</b></li>);
// return <ol>{listem}</ol>;
