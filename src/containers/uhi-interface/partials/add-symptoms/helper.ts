import { PlusCircleFilled } from '@ant-design/icons';

export const specialityToSymptomMapping = {
    GP: [
        {
            speciality: 'Head',
            icon: '/head.svg',
            custom: false
        },
        {
            speciality: 'Bones and Joints',
            icon: '/bones.svg',
            custom: false
        },
        {
            speciality: 'Stomach',
            icon: '/stomach.svg',
            custom: false
        },
        {
            speciality: 'Other',
            icon: PlusCircleFilled,
            custom: true
        }
    ]
} as const;

export const symptomMapping: { [key: string]: Readonly<string[]> } = {
    Head: ['Headache', 'Muscle aches', 'Loss of appetite', 'Chills and shivering', 'Dehydration'],
    'Bones and Joints': ['Osteoporosis', 'Metabolic bone diseases', 'Fracture', 'Stress fracture', 'Bone cancer'],
    Stomach: ['Abdominal pain and cramps', 'Excess gas', 'Bloating', 'Stomach Pain', 'Diarrhea'],
    Other: ['Tooth Inflammation', 'Vomit', 'Red eye', 'Pain in upper abdomen', 'Chest tightness']
} as const;
