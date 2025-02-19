
export default function Nav() {
  return (
    <div className="flex items-center justify-between py-6 px-20">
      <a href="#">
        <img src="logo.png" alt="RoadHouse Grille Logo" className="w-16"/>
      </a>
      <div className="flex items-center space-x-10">
        <a href="#" className="text-[#F0F0F0] hover:text-primary">Home</a>
        <a href="#" className="text-[#F0F0F0] hover:text-primary">Menu</a>
        <a href="#" className="text-[#F0F0F0] hover:text-primary">Events</a>
        <a href="#" className="text-[#F0F0F0] hover:text-primary">Location</a>
        <a href="#" className="text-[#F0F0F0] hover:text-primary">Cart</a>
      </div>
    </div>
  )
}
