import PaymentCard from '@/components/PaymentCard';
import Paymentpage from '@/components/paymentpage';
import { v4 as uuidv4 } from 'uuid';
const thankYouMessages = [
    "Your creativity is truly inspiring! I'm happy to contribute.",
    "I appreciate how much effort you put into your work! Keep it up!",
    "Your content has transformed my day. Here’s to more amazing creations!",
    "Thank you for sharing your talents with us! Excited to support you!",
    "Every little bit helps! Can't wait for your next project!",
    "You bring so much joy through your art. Proud to support you!",
    "Your passion is contagious! Here's a small gesture to keep you going!",
    "You make a real difference with your work! Thank you for everything!",
    "I look forward to your content every day! Happy to help!",
    "Your creativity lights up my feed! Glad to give back!",
    "Supporting you is a pleasure! Your work resonates with so many of us!",
    "Your talent deserves all the recognition! Here’s to your success!",
    "Each piece you create is a masterpiece! Keep shining!",
    "Your hard work doesn't go unnoticed! I'm thrilled to support you!",
    "Thanks for being such a positive influence! Happy to contribute!",
    "Your content always brightens my outlook! Here's my support!",
    "Can't wait to see how you use this donation! Your potential is limitless!",
    "Thank you for being authentic and real in your content!",
    "Your works inspire action and creativity in others! Let's support that!",
    "I'm here cheering you on! Your journey is just getting started!"
]
const names = [
    "Aarav", "Vivaan", "Aditya", "Kabir", "Krishna",
    "Siddharth", "Anaya", "Isha", "Rohan", "Saanvi",
    "Arjun", "Diya", "Dev", "Meera", "Nisha",
    "Rahul", "Aditi", "Pooja", "Tanvi", "Vani"
]

async function Page({ params }) {
    const { username } = await params
    var Supporters = [];
    for (let i = 0; i < 18; i++) {
        Supporters = [...Supporters, { Name: names[Math.floor(Math.random() * 20)], Amount: (Math.random() * 99 + 1).toFixed(2), Message: thankYouMessages[Math.floor(Math.random() * 20)], uuid: uuidv4() }];
    }


    return <>
        <Paymentpage username={username} Supporters={Supporters}/>
    </>
}
export default Page
