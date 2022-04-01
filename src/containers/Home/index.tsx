import Image from 'next/image'
import dateTime from '@/src/helpers/dateTime'
import TCDrawnImage from '@/src/assets/images/tc_drawn.png'
import Logo from '@/src/assets/images/logo.png'
import InvitationCardASide from '@/src/assets/images/invitation_card_a_side.jpg'
import InvitationCardBSide from '@/src/assets/images/invitation_card_b_side.jpg'
import { WEDDING_TIME, LOCATION_LINK } from '@/src/constants/config'

export const HomeContainer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <section className="space-y-4 text-center">
        <div>
          <Image src={Logo} alt="log" priority layout="responsive" />
        </div>
        <h2 className="text-xl">Welcome to our wedding</h2>
        <h2 className="text-xl">{dateTime(WEDDING_TIME).format('YYYY.MM.DD dddd HH:mm A')}</h2>
        <h2 className="text-xl">
          <a
            className="underline underline-offset-2"
            href={LOCATION_LINK}
            target="_blank"
            rel="noreferrer"
          >
            台北晶華酒店 四樓萬象廳
          </a>
        </h2>
      </section>
      <section className="max-w-[640px] mx-auto flex flex-col justify-center items-center">
        <Image src={TCDrawnImage} alt="tc_drawn" priority />
      </section>
      <section className="flex justify-center items-center flex-wrap">
        <div className="p-5">
          <Image
            src={InvitationCardASide}
            alt="invitation_card_a"
            priority
            width={374}
            height={525}
          />
        </div>
        <div className="p-5">
          <Image
            src={InvitationCardBSide}
            alt="invitation_card_b"
            priority
            width={374}
            height={525}
          />
        </div>
      </section>
    </div>
  )
}
