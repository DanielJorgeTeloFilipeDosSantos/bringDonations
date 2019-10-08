import React, { Component } from "react";

export default class EditDonation extends Component {
  render() {
    return (
      <div>
        <h1>EDIT VIEW</h1>
      </div>
    );
  }
}

// import React, { Component } from "react";

// import Button from "react-bootstrap/Button";

// import PostForm from "./../components/PostForm";

// import { edit, load, remove } from "./../services/post-api";

// export default class Edit extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: {
//         title: "",
//         body: ""
//       }
//     };
//     this.onFormValueChange = this.onFormValueChange.bind(this);
//     this.editPost = this.editPost.bind(this);
//     this.deletePost = this.deletePost.bind(this);
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     load(id)
//       .then(post => {
//         this.setState({
//           post: {
//             ...post
//           }
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   onFormValueChange(data) {
//     this.setState({
//       post: {
//         ...this.state.post,
//         ...data
//       }
//     });
//   }

//   editPost() {
//     const id = this.props.match.params.id;
//     const post = this.state.post;
//     edit(id, post)
//       .then(post => {
//         this.props.history.push(`/post/${post._id}`);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   deletePost() {
//     const id = this.props.match.params.id;
//     remove(id)
//       .then(post => {
//         this.props.history.push("/");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Edit Post</h1>
//         <PostForm
//           value={this.state.post}
//           onValueChange={this.onFormValueChange}
//           onFormSubmit={this.editPost}
//         >
//           <Button type="submit">Edit Post</Button>
//         </PostForm>
//         <Button onClick={this.deletePost} className="btn-danger">
//           Delete Post
//         </Button>
//       </div>
//     );
//   }
// }
