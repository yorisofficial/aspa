export interface PropsRegulationData {
  id: string;
  language: string;
  data: PropsRegulation[];
}

export interface PropsRegulation {
  title: string;
  description: string;
}

export const DataRegulation = [
  {
    id: "1",
    language: "en",
    data: [
      {
        title: "Acknowledgement and Personal Data Use",
        description:
          "By participating in ASPA, you acknowledge and agree that your personal data, including but not limited to your name, contact details, and any other relevant information, may be collected, used, and stored for the purpose of program administration, communication, and improvement of services. Your data will not be shared with third parties without your explicit consent, except as required by law.",
      },
      {
        title: "Acknowledgment of Risk",
        description:
          "I, the undersigned participant, hereby acknowledge that surfing and related activities, including but not limited to surfing lessons, camps, rentals, and events (hereafter referred to as Activities) organized by ASPA (hereafter referred to as the Academy) inherently involve risks and dangers. I understand that participation in these Activities can result in serious injury, permanent disability, or death. These risks may include but are not limited to drowning, impact with objects or other participants, adverse weather conditions, marine life encounters, equipment failure, and negligence on the part of the Academy or other participants.",
      },
      {
        title: "Assumption of Risk",
        description:
          "I voluntarily choose to participate in the Activities and fully accept and assume all risks, both known and unknown, associated with my participation. I understand that these risks may be caused by my own actions or inactions, the actions or inactions of others, or the conditions in which the Activities take place. I assume full responsibility for my participation.",
      },
      {
        title: "Waiver of Liability",
        description:
          "In consideration of being allowed to participate in the Activities, I, on behalf of myself, my heirs, assigns, personal representatives, and next of kin, hereby release, waive, and discharge the Academy, its owners, directors, officers, employees, agents, volunteers, and any other representatives (collectively referred to as Releasees) from any and all claims, demands, actions, or causes of action of any kind arising out of or related to any injury, loss, or damage to person or property that I may suffer as a result of my participation in the Activities, including claims arising from the negligence of the Releasees.",
      },
      {
        title: "Indemnification",
        description:
          "I agree to indemnify, defend, and hold harmless the Releasees from any and all claims, actions, suits, costs, expenses, damages, and liabilities, including attorney fees, arising out of or related to my participation in the Activities, including claims arising from the negligence of the Releasees.",
      },
      {
        title: "Medical Treatment",
        description:
          "In the event of an emergency, I consent to receive necessary medical treatment. I understand and agree that I will be responsible for any medical costs incurred as a result of my participation in the Activities.",
      },
      {
        title: "Photographic and Media Release",
        description:
          "I grant the Academy the right to use my likeness in any photographs, videos, or other media for promotional, advertising, or other purposes without compensation to me.",
      },
      {
        title: "Severability",
        description:
          "I agree that if any portion of this document is found to be void or unenforceable, the remaining portions shall remain in full force and effect.",
      },
      {
        title: "Governing Law",
        description:
          "This agreement shall be governed by and construed in accordance with the laws of Bali, Indonesia, without regard to its conflict of laws principles.",
      },
    ],
  },
  {
    id: "2",
    language: "id",
    data: [
      {
        title: "Syarat dan Kondisi",
        description:
          "Pernyataan Resiko:\n" +
          "Saya, peserta yang namanya tertera di bawah ini, dengan ini menyatakan bahwa saya memahami bahwa kegiatan surfing dan kegiatan lainnya yang diselenggarakan oleh Asian Surf Performance Academy (ASPA) memiliki resiko dan bahaya. Saya memahami bahwa dengan mengikuti kegiatan ini, saya dapat mengalami cedera serius, cacat permanen, atau meninggal. Resiko ini termasuk tapi tidak terbatas pada: tenggelam, benturan dengan objek atau peserta lain, cuaca buruk, paparan binatang laut, kegagalan peralatan, dan kelalaian dari Akademi atau peserta lain.\n",
      },
      {
        title: "Asumsi Resiko",
        description:
          "Saya memilih untuk ikut serta dalam kegiatan ini dan sepenuhnya menerima serta menanggung semua resiko yang terkait, baik yang diketahui maupun tidak. Saya memahami bahwa resiko ini dapat disebabkan oleh tindakan atau tidak berbuat saya sendiri, tindakan atau tidak berbuat orang lain, atau kondisi di mana kegiatan berlangsung. Saya menerima tanggung jawab penuh atas keikutsertaan saya.\n",
      },
      {
        title: "Pembebasan Tanggung Jawab",
        description:
          'Dengan diizinkan untuk ikut serta dalam kegiatan ini, saya, atas nama diri saya sendiri, ahli waris, penerima hak, perwakilan pribadi, dan kerabat terdekat, dengan ini membebaskan, melepaskan, dan mengesampingkan Akademi, pemilik, direktur, pejabat, karyawan, agen, relawan, dan perwakilan lainnya (secara kolektif disebut "Pihak yang Dibebaskan") dari segala klaim, tuntutan, tindakan, atau penyebab tindakan dalam bentuk apapun yang timbul dari atau terkait dengan cedera, kerugian, atau kerusakan pada diri atau properti yang mungkin saya alami akibat dari partisipasi saya dalam kegiatan ini, termasuk klaim yang timbul dari kelalaian Pihak yang Dibebaskan.\n',
      },
      {
        title: "Indemnifikasi",
        description:
          "Saya setuju untuk mengganti rugi, membela, dan melindungi Pihak yang Dibebaskan dari semua klaim, tindakan, gugatan, biaya, pengeluaran, kerusakan, dan kewajiban, termasuk biaya pengacara, yang timbul dari atau terkait dengan partisipasi saya dalam kegiatan ini, termasuk klaim yang timbul dari kelalaian Pihak yang Dibebaskan.\n",
      },
      {
        title: "Pengobatan Medis",
        description:
          "Jika terjadi keadaan darurat, saya setuju untuk mendapatkan perawatan medis yang diperlukan. Saya paham dan setuju bahwa saya akan bertanggung jawab atas biaya medis yang timbul akibat dari partisipasi saya dalam kegiatan ini.\n",
      },
      {
        title: "Izin Foto dan Media",
        description:
          "Saya memberikan izin kepada Akademi untuk menggunakan foto atau video saya di media lain untuk promosi atau iklan tanpa membayar saya.\n",
      },
      {
        title: "Keterlisahan",
        description:
          "Saya setuju bahwa jika ada bagian dari dokumen ini yang tidak berlaku, maka bagian lainnya akan tetap berlaku.\n",
      },
      {
        title: "Hukum yang Berlaku",
        description:
          "Perjanjian ini akan diatur dan diinterpretasikan berdasarkan hukum yang berlaku di Bali, Indonesia, tanpa memperhatikan prinsip-prinsip hukum yang berbeda.\n",
      },
    ],
  },
];
