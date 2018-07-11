import React from "react";
import CreateSnippetModalContainer from "../modal/create_snippet_modal_container";
// import ShareModalContainer from "../modal/share_modal_container";
// import CreateUsernameModalContainer from "../modal/create_username_modal_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    displayModal = () => {
        return <CreateSnippetModalContainer />
        // console.log("in sidebar, displayModal")
        // console.log(this.props.username)
        // if (this.props.username) {
        //     return <ShareModalContainer />
        // } else {
        //     return <CreateUsernameModalContainer />
        // }
    }

    displaySharedSnippets = () => {
        return this.props.sharedSnippets.map(snip => <li><a href="#">{snip["username"]}</a></li>)
    }

    render() {
        return (
            <div class="wrapper">

    <nav id="sidebar">
        {/* <div class="sidebar-header">
            <h3></h3>
        </div> */}

        <ul class="list-unstyled components">
      
            <li>
                <a href="#">My Snippet</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Shared Snippets</a>
                {/* add class "collapse if u want it to start collapsed" */}
                <ul class=" list-unstyled" id="pageSubmenu">
                    {/* <li>
                        <a href="#">Pusheen</a>
                    </li>
                    <li>
                        <a href="#">Stormy</a>
                    </li>
                    <li>
                        <a href="#">Pip</a>
                    </li> */}
                    {this.displaySharedSnippets()}
                </ul>
            </li>
         
            <li class="custom-li">
                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">Create New Snippet</button>
            </li>
        </ul>
    </nav>
    {this.displayModal()}
</div>
        )
    }
}

export default Sidebar;