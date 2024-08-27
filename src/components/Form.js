export default function Form(props) {
    return (
        <div className="con">
              <form onSubmit={props.handleSubmit}>
                <div className="incon1">
                    <div className="incon">
                        <label htmlFor="toptext">Top text</label>
                        <input type="text" id="toptext" name="toptext" onChange={props.handleChange} value={props.toptext}></input>
                    </div>
                    <div className="incon">
                        <label htmlFor="bottomtext">Bottom text</label>
                        <input type="text" id="bottomtext" name="bottomtext" onChange={props.handleChange} value={props.bottomtext}></input>
                    </div>
                </div>
                <button>Get a new meme image</button>
            </form>
        </div>
    );
}