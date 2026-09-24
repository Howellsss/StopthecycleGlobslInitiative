export interface Program {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const programs: Program[] = [
  {
    id: 'digital-upskilling',
    category: 'Digital Upskilling',
    title: 'The world is changing. Your skills should too.',
    description:
      'Technology is changing the way opportunity works. We help young people develop practical digital skills that can open new doors in work, entrepreneurship and the global economy.',
    image: '/images/hero/IMG_9497.JPG',
    alt: 'A Stop The Cycle team preparing digital media equipment',
  },
  {
    id: 'life-class',
    category: 'Life Class Community',
    title: 'Some things cannot be learned from a screen.',
    description:
      'A space for honest conversations, personal growth, mentorship and the difficult work of becoming who you were created to be. Every Thursday, people gather to talk about the things that matter.',
    image: '/images/hero/IMG_9493.JPG',
    alt: 'Young people gathered for a Stop The Cycle group conversation',
  },
  {
    id: 'leadership',
    category: 'Leadership Development',
    title: 'Leadership is not simply a title.',
    description:
      'It is the capacity to take responsibility, make decisions, influence others and create change. We help young people develop the confidence and capability to lead.',
    image: '/images/hero/IMG_9494.JPG',
    alt: 'A Stop The Cycle speaker addressing participants',
  },
  {
    id: 'economic-empowerment',
    category: 'Economic Empowerment',
    title: 'Potential becomes powerful when it can create value.',
    description:
      'Preparing young people for opportunity, entrepreneurship and participation in the economy. Because capacity creates options — and sometimes, one new skill is enough to open a door.',
    image: '/images/hero/IMG_9496.JPG',
    alt: 'A Stop The Cycle participant listening during a summit session',
  },
];
