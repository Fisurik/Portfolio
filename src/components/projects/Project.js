import proj01 from '../../img/projects/01.jpg'

const Project = () => {
    return ( 
        <li class="project">
        <a href="./project-page.html">
            <img src={proj01} alt="Project img" class="project__img" />
            <h3 class="project__title">Gaming streaming portal</h3>
        </a>
    </li>
     );
}
 
export default Project;