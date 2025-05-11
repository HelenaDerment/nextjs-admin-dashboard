'use client';

import { useState } from 'react';

type ProgramType = 'Undergraduate' | 'Postgraduate' | 'Vocational';
type StudyArea =
  | 'Architecture'
  | 'Art'
  | 'Biomedical sciences'
  | 'Building'
  | 'Business'
  | 'Communication'
  | 'Community services'
  | 'Criminology'
  | 'Design'
  | 'Education'
  | 'Engineering'
  | 'Environment'
  | 'Fashion'
  | 'Game design'
  | 'Health science'
  | 'Information technology'
  | 'International studies'
  | 'Law'
  | 'Media'
  | 'Property and valuation'
  | 'Science'
  | 'Social science'
  | 'Surveying'
  | 'Urban planning';

type ProgramDataType = {
  [key in ProgramType]: {
    [area in StudyArea]?: string[];
  };
};

const programData: ProgramDataType = {
  Undergraduate: {
    Architecture: [
      "Bachelor of Architectural Design",
      "Bachelor of Landscape Architectural Design",
      "Bachelor of Urban and Regional Planning",
    ],
    Art: [
      "Bachelor of Arts (Fine Art)",
      "Bachelor of Arts (Photography)",
      "Bachelor of Arts (Art History and Curating)",
    ],
    "Biomedical sciences": [
      "Bachelor of Biomedical Science",
      "Bachelor of Laboratory Medicine (Honours)",
      "Bachelor of Biomedical Science (Laboratory Medicine)",
    ],
    Building: [
      "Bachelor of Applied Science (Construction Management) (Honours)",
      "Bachelor of Applied Science (Project Management) (Honours)",
      "Bachelor of Applied Science (Property and Valuation) (Honours)",
    ],
    Business: [
      "Bachelor of Business",
      "Bachelor of Accounting",
      "Bachelor of Business (Marketing)",
      "Bachelor of Business (Management)",
      "Bachelor of Business (Finance)",
    ],
    Communication: [
      "Bachelor of Communication (Professional Communication)",
      "Bachelor of Communication (Journalism)",
      "Bachelor of Communication (Public Relations)",
      "Bachelor of Communication (Advertising)",
    ],
    "Community services": [
      "Bachelor of Social Work (Honours)",
      "Bachelor of Youth Work and Youth Studies",
    ],
    Criminology: ["Bachelor of Criminology and Justice"],
    Design: [
      "Bachelor of Design (Communication Design)",
      "Bachelor of Design (Digital Media)",
      "Bachelor of Design (Games)",
      "Bachelor of Industrial Design (Honours)",
    ],
    Education: [
      "Bachelor of Education (Primary Education)",
      "Bachelor of Education (Early Childhood Education)",
      "Bachelor of Education (Secondary Education)",
    ],
    Engineering: [
      "Bachelor of Engineering (Honours)",
      "Bachelor of Engineering (Mechanical Engineering) (Honours)",
      "Bachelor of Engineering (Electrical Engineering) (Honours)",
      "Bachelor of Engineering (Civil Engineering) (Honours)",
    ],
    Environment: [
      "Bachelor of Environmental Science",
      "Bachelor of Environmental Science/Bachelor of Environment and Society",
    ],
    Fashion: [
      "Bachelor of Fashion (Design)",
      "Bachelor of Fashion (Enterprise)",
      "Bachelor of Textiles (Design)",
    ],
    "Game design": ["Bachelor of Design (Games)"],
    "Health science": [
      "Bachelor of Health Science",
      "Bachelor of Health Science/Bachelor of Applied Science (Chinese Medicine)",
    ],
    "Information technology": [
      "Bachelor of Information Technology",
      "Bachelor of Computer Science",
      "Bachelor of Software Engineering (Honours)",
    ],
    "International studies": ["Bachelor of International Studies"],
    Law: ["Bachelor of Laws", "Bachelor of Laws (Honours)"],
    Media: [
      "Bachelor of Media and Communication",
      "Bachelor of Media and Communication (Honours)",
    ],
    "Property and valuation": [
      "Bachelor of Applied Science (Property and Valuation) (Honours)",
    ],
    Science: [
      "Bachelor of Science",
      "Bachelor of Science (Applied Chemistry)",
      "Bachelor of Science (Biotechnology)",
      "Bachelor of Science (Food Technology and Nutrition)",
    ],
    "Social science": [
      "Bachelor of Social Science (Psychology)",
      "Bachelor of Social Science (Youth Work)",
    ],
    Surveying: ["Bachelor of Applied Science (Surveying) (Honours)"],
    "Urban planning": ["Bachelor of Urban and Regional Planning (Honours)"],
  },
  Postgraduate: {},
  Vocational: {},
};

export default function BudgetChangesPage() {
  const [budget, setBudget] = useState('');
  const [programType, setProgramType] = useState<ProgramType | ''>('');
  const [studyArea, setStudyArea] = useState<StudyArea | ''>('');
  const [degree, setDegree] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(true);
  };

  const areas =
    programType && programData[programType]
      ? (Object.keys(programData[programType]) as StudyArea[])
      : [];

  const degrees =
    programType && studyArea
      ? programData[programType][studyArea] ?? []
      : [];

  return (
    <div className="min-h-screen bg-rmit-lightGrey p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-rmit-red mb-4">
          Flexible Budget Changes
        </h1>
        <p className="text-gray-600 mb-6">
          Adjust the budget when spending changes or programs are added/removed.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-rmit-black mb-1">
              Additional Budget ($)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="input input-bordered w-full border border-rmit-grey p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold text-rmit-black mb-1">
              Program Type
            </label>
            <select
              value={programType}
              onChange={(e) => {
                setProgramType(e.target.value as ProgramType);
                setStudyArea('');
                setDegree('');
              }}
              className="select w-full border border-rmit-grey p-2 rounded"
            >
              <option disabled value="">
                Select program type
              </option>
              {(Object.keys(programData) as ProgramType[]).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {areas.length > 0 && (
            <div>
              <label className="block font-semibold text-rmit-black mb-1">
                Study Area
              </label>
              <select
                value={studyArea}
                onChange={(e) => {
                  setStudyArea(e.target.value as StudyArea);
                  setDegree('');
                }}
                className="select w-full border border-rmit-grey p-2 rounded"
              >
                <option disabled value="">
                  Select a study area
                </option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          )}

          {degrees.length > 0 && (
            <div>
              <label className="block font-semibold text-rmit-black mb-1">
                Degree
              </label>
              <select
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="select w-full border border-rmit-grey p-2 rounded"
              >
                <option disabled value="">
                  Select a degree
                </option>
                {degrees.map((deg) => (
                  <option key={deg} value={deg}>
                    {deg}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="bg-rmit-blue text-white py-2 px-4 rounded hover:bg-rmit-red transition"
          >
            Submit Change
          </button>
        </form>

        {showSuggestions && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-rmit-black mb-2">
              Suggested Budget Reallocations
            </h2>
            <div className="bg-rmit-lightGrey p-4 rounded shadow">
              <ul className="list-disc ml-5 text-sm text-gray-700">
                <li>Move $1000 from COSC1234 to COSC2468</li>
                <li>Allocate $800 to AI-2026</li>
              </ul>
            </div>

            <div className="bg-rmit-red text-white p-3 mt-4 rounded shadow">
              ⚠️ Potential budget shortage detected for COSC3010.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


