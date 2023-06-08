//Reusable header component, just import Header and place it at the top of your page. 
//Pass in "title" as a prop with the name of the page

export default function Header(props) {
    return (
        <header className="sustainHeader">
            <h2>{props.title}</h2>
            <div className="user">
                <i className="bi bi-bell bell"></i>
                <i className="bi bi-search magnify"></i>
                <i className="bi bi-person-circle avatar"></i>
            </div>
        </header>
    )
};