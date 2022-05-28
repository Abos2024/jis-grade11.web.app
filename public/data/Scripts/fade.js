import Highway from '..\..\node_modules\@dogstudio\highway';
import Tween from'..\..\node_modules\gsap';
class Fade extends Highway.Transition{
    in({from,to,done}){
       // Remove the old content
        from.remove();
        // Animation
        Tween.fromto(to,0.5,{opacity:0},{opacity:1,onComplete:done});
   }
    out({from,done}){
        // Animation
        Tween.fromto(from,0.5,{opacity:1},{opacity:0,onComplete:done});
   }
}
// Export Fade class
export default Fade;