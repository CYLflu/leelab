/* ============================================================
   JOURNAL CLUB 데이터 — 글을 추가/수정하려면 이 파일만 고치면 됩니다.
   - 최신 글이 위로 오게 배열 맨 위에 추가하세요.
   - 각 항목은 { } 로 감싸고, 항목 사이는 쉼표(,)로 구분합니다.
   - date     : 발표/등록 날짜. "YYYY.MM.DD" 형식.
   - title    : 논문 원제목 (영어 그대로).
   - citation : 저자·저널·연도 정보. 한 줄로.
   - pdf      : PDF 파일 경로. assets/pdf/ 폴더에 넣은 파일명을 적으세요.
                (없으면 "" 로 두면 "원문 PDF 보기" 버튼이 안 보입니다.)
   - summary  : 한글 요약. 문단 배열로, 문단마다 따옴표로 감싸고 쉼표로 구분합니다.
   ============================================================ */
window.JOURNAL_CLUB = [
  {
    date: "2026.08.05",
    title: "Influenza A virus NS1 effector domain is required for PA-X-mediated host shutoff in infected cells",
    citation: "Bougon J, Kadijk E, Gallot-Lavallee L, Curtis BA, Landers M, Archibald JM, Khaperskyy DA. <i>Journal of Virology</i> (2024) 98(5): e01901-23.",
    pdf: "assets/pdf/jc_2026-08-05_bougon-ns1-pax-hostshutoff.pdf",
    summary: [
      "인플루엔자 A바이러스(IAV)는 감염 세포에서 숙주 유전자 발현을 전반적으로 억제하는 'host shutoff'를 일으키는 단백질을 두 가지 가지고 있다 — 핵 내 mRNA 성숙·수출을 막는 NS1과, 숙주 mRNA를 직접 잘라내는 엔도리보뉴클레아제 PA-X이다. 두 단백질이 함께 진화(co-evolve)한다는 정황은 있었지만, 실제로 서로 기능적으로 상호작용하는지는 알려져 있지 않았다. 저자들은 NS1의 기능이 PA-X의 활성에 직접 영향을 주는지를 규명하고자 했다.",
      "실험실 표준주인 PR8(H1N1) 바이러스를 이용해, 정상 바이러스(WT)와 PA-X 결손주(PA(fs)), NS1의 C말단 이펙터 도메인이 없는 결손주(NS1(N80)), 그리고 둘 다 결손된 이중돌연변이주를 사람 폐상피세포(A549, 일부는 인터페론 반응이 없는 MAVS 결손 A549)에 감염시켰다. RT-qPCR로 숙주 mRNA(ACTB, G6PD, POLR2A, MALAT1) 분해 정도를 측정하고, 면역형광·형광제자리혼성화(immunoFISH)로 핵 내 poly(A) RNA와 PABPC1 단백질의 분포를 관찰했으며, Nanopore 직접 RNA 시퀀싱으로 핵/세포질 전사체와 poly(A) 꼬리 길이까지 정밀 분석했다.",
      "NS1의 이펙터 도메인이 없으면 PA-X 유전자가 정상으로 있어도 숙주 mRNA 분해와 PABPC1의 핵 내 축적이 PA-X 결손주만큼 뚜렷하게 감소했다 — 즉 NS1의 이펙터 도메인 기능이 PA-X의 host shutoff 활성에 필수적이었다. 이 현상은 인터페론 반응이 없는 세포에서도 동일하게 나타나 항바이러스 반응 때문이 아니었다. 메커니즘을 파헤쳐보니, NS1은 핵 스펙클(nuclear speckle)에 있던 PABPN1 단백질을 그곳에서 밀어내는데(특정 아미노산 I123/M124 의존), 이 때문에 PA-X가 세포질 mRNA를 없앤 뒤 남는 PABPC1이 핵으로 들어가 쌓일 공간이 생긴다는 모델을 제시했다 — 실제로 PABPN1을 인위적으로 없애자 NS1 이펙터 도메인이 없는 바이러스에서도 PABPC1의 핵 내 축적이 회복되었다. 한편 핵 내 poly(A) RNA 축적 자체는 NS1·PA-X와 무관하게 일어났고, 이는 주로 바이러스 자신의 poly(A) mRNA(특히 NP mRNA)가 핵에 쌓이기 때문이었다 — PA-X가 없는 인플루엔자 B바이러스 감염에서도 동일하게 관찰됐다. 바이러스 감염은 또한 핵 스펙클 자체를 흩어지게 하고 MALAT1 RNA를 크게 감소시켰다.",
      "이 연구는 NS1과 PA-X가 단순히 각자 따로 작용해 효과를 더하는 것이 아니라, NS1이 PABPN1을 억제해 PA-X의 host shutoff 효과(특히 핵 내 PABPC1 축적)를 실질적으로 '증폭'시키는 협력 관계에 있음을 처음으로 보여준다. Host shutoff를 약화시키는 것은 면역원성이 높은 약독화 생백신(live attenuated vaccine) 개발 전략으로 주목받고 있는데, 이 결과는 NS1과 PA-X를 함께 고려해야 원하는 효과를 얻을 수 있음을 시사하며, 향후 항바이러스제 개발의 새로운 표적 지점도 제시한다."
    ]
  },
  {
    date: "2026.07.29",
    title: "Air-liquid interface model for influenza aerosol exposure in vitro",
    citation: "Seibert B, Caceres CJ, Gay LC, Shetty N, Cargnin Faccin F, Carnaccini S, Walters MS, Marr LC, Lowen AC, Rajao DS, Perez DR. <i>Journal of Virology</i> (2025) 99(7): e00619-25.",
    pdf: "assets/pdf/jc_2026-07-29_seibert-ali-influenza-aerosol.pdf",
    summary: [
      "인플루엔자 A바이러스(FLUAV)는 실제로는 공기 중 에어로졸을 통해 전파되지만, 대부분의 세포실험은 바이러스를 액체 상태로 직접 떨어뜨리는 '액체 접종(liquid inoculation)' 방식을 사용해왔다. 이는 실제 호흡기 감염 양상과 차이가 있다. 저자들은 저비용·고접근성의 자체 제작 '에어로졸 침적 챔버(aerosol settling chamber)' 시스템을 개발하여, 인플루엔자 바이러스의 공기전파 감염력을 세포 수준에서 직접 평가할 수 있는 모델을 제시했다.",
      "네뷸라이저로 0.6~2 μm 크기(호흡기 깊숙이 도달 가능한 크기)의 에어로졸을 만들어, 판데믹 2009 H1N1(Ca04), 돼지유래 H3N2(Oh/04), 조류유래 H9N2(WF10) 세 가지 바이러스를 MDCK 세포와, 공기-액체 경계면(air-liquid interface, ALI)에서 17일간 배양해 섬모세포·기저세포·점액세포 등으로 분화시킨 사람 기도상피세포(BCi-NS1.1)에 각각 노출시켰다. 액체로 직접 접종한 경우와 비교하여 에어로졸 50% 감염량(AID50)을 계산했다.",
      "세 바이러스 모두 액체 접종에서는 MDCK 세포에 비슷하게 잘 감염됐지만, 에어로졸 노출에서는 감염 효율이 서로 달랐다. MDCK 세포에서는 H1N1이 가장 낮은 AID50(가장 잘 감염)을 보였고, H3N2가 가장 높았다. 반면 사람 기도상피세포에서는 H3N2가 H1N1보다 더 효율적으로 감염됐고, 조류유래 H9N2는 액체·에어로졸 접종 모두에서 거의 감염되지 않아 사람 기도 세포에 잘 적응하지 못했음을 보여주었다.",
      "이 에어로졸 노출 시스템은 사람에 잘 적응한 바이러스(H1N1, H3N2)와 조류 적응형 바이러스(H9N2)를 공기전파 감염력 차이로 구분해낼 수 있어, 신종·변이 인플루엔자 바이러스의 판데믹 위험도를 값비싼 동물실험 없이 세포 수준에서 먼저 스크리닝하는 용도로 활용될 수 있다. 저자들은 이 플랫폼을 SARS-CoV-2 등 다른 호흡기 바이러스나, 비강 접종 백신주의 공기전파 특성 평가에도 확장 적용할 수 있다고 제안했다."
    ]
  }
];
