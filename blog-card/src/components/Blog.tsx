import illustration from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";

function Blog() {
  return (
    <div className="blog-card">
        <div className='card-image-container'>
        <img className="card-image" alt="illustration" src={illustration}/>
        </div>
        <div className='card-details'>
        <div className='card-action-button-container'>
            <button className='learning-button'>Learning</button>
        </div>
        <div className='blog-publish-date'>
            <p>Published 21 Dec 2023</p>
        </div>
        <div className='card-heading'>
            <h3>HTML & CSS Foundations</h3>
        </div>
        <div className='card-description'>
            <span>These languages are the backbones of every website, defining structures, content and presentation</span>
        </div>
        <div className='card-footer'>
            <div className='card-author'>
                <img  className="avatar-image" alt='avatar' src={avatar}/>
                <p className='author-name'>Greg Hooper</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blog