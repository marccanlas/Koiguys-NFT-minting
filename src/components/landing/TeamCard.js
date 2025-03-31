import Image from '@material-tailwind/react/Image';

export default function LandingTeamCard({ img, name}) {
    return (
        <div className="w-full  mb-12">
            <div className="position-relative">
                <Image src={img} alt={name} raised style={{ width: "200px", height: "200px" }} />
                
            </div>
        </div>
    );
}
