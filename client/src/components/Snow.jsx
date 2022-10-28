function Snow() {
  
  return (
    <>
      {[...Array(200)].map((e) => <div className='snow' />)}
    </>
  );
}

export default Snow;
