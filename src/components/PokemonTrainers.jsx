const PokemonTrainers = ({ trainerData, id, regionName }) => {
  const modalId = `modal_${id}`;

  return (
    <>
      <button
        className="btn mt-2"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Trainer Info
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-slate-800">
          <h3 className="font-bold md:text-2xl text-lg text-center my-2">
            Pokemon trainers of {regionName} region
          </h3>
          <ul>
            {trainerData.map((trainer, index) => (
              <>
                <h3 key={index} className="md:text-lg text-sm text-left pl-2 md:pl-20">
                  {trainer.name}  
                  <span> ({trainer.bio})</span>
                </h3>
              </>
            ))}
          </ul>
          <div className="modal-action">
          <p className="py-4 text-sm text-center">
            Press ESC key or click the button below to close
          </p>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PokemonTrainers;
