export default function ChuelryGoldPriceboardMockup() {
  const prices = [
    { label: "순금 24K", value: "855,500원", diff: "+5,000", trend: "up" },
    { label: "18K", value: "644,600원", diff: "+3,700", trend: "up" },
    { label: "14K", value: "503,200원", diff: "+2,900", trend: "up" },
    { label: "은", value: "9,500원", diff: "변동 없음", trend: "flat" },
    { label: "백금", value: "210,000원", diff: "-1,500", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#2f2a24]">
      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <div className="overflow-hidden rounded-[32px] border border-[#e7dfd2] bg-white shadow-[0_20px_60px_rgba(70,58,40,0.08)]">
          <div className="relative border-b border-[#eee6da] bg-gradient-to-br from-[#fcfaf6] via-[#f7f1e8] to-[#f4ede2] px-6 py-10 md:px-10 md:py-14">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d8c2a6]/20 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs tracking-[0.35em] text-[#9a8262] uppercase">For Your Chic and Unique Days</div>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">CHUELRY 오늘의 금시세</h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#74685a] md:text-base">
                  조용히 정제된 화면 위에, 오늘의 시세만 또렷하게 담았습니다. 손님이 한눈에 읽기 쉽고,
                  매장에서는 신뢰감 있게 보여줄 수 있는 CHUELRY 스타일의 금시세 안내 페이지입니다.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#eadfce] bg-white/80 px-5 py-4 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.28em] text-[#9a8262]">Updated</div>
                <div className="mt-2 text-lg font-medium">2026.03.26 13:20</div>
                <div className="mt-1 text-sm text-[#8a7f72]">매장 기준 실시간 안내표</div>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {prices.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-[#efe6d8] bg-[#fffdfa] px-6 py-6 shadow-[0_10px_30px_rgba(80,62,35,0.04)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm tracking-[0.12em] text-[#8f7b62] uppercase">{item.label}</div>
                      <div className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{item.value}</div>
                    </div>
                    <div className="rounded-full border border-[#eadcca] bg-white px-3 py-1 text-xs text-[#8b7b66]">
                      오늘 시세
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#f2eadf] pt-4 text-sm">
                    <span className="text-[#8b8074]">전일 대비</span>
                    <span
                      className={
                        item.trend === "up"
                          ? "text-[#9a6d41]"
                          : item.trend === "down"
                            ? "text-[#6e7487]"
                            : "text-[#8b8074]"
                      }
                    >
                      {item.diff}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[28px] border border-[#efe6d8] bg-[#fcfaf7] px-6 py-6">
                <div className="text-sm tracking-[0.14em] text-[#8f7b62] uppercase">Guide</div>
                <div className="mt-4 text-xl font-medium">매장 안에서 바로 신뢰를 주는 시세표</div>
                <p className="mt-3 text-sm leading-6 text-[#75695d] md:text-base">
                  손님용 페이지는 숫자를 크게, 설명은 절제해서 보여줍니다. 상담 중에는 화면이 복잡하면 집중이
                  흐트러지기 쉬워서, CHUELRY 스타일에서는 여백과 정돈된 카드 배열을 먼저 살리는 것이 좋습니다.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#e8ddcc] bg-[#2f2a24] px-6 py-6 text-white">
                <div className="text-xs uppercase tracking-[0.28em] text-[#d4b58d]">Notice</div>
                <div className="mt-4 text-lg font-medium leading-8">
                  본 시세는 매장 기준가이며,
                  <br />시장 변동에 따라 수시 조정될 수 있습니다.
                </div>
                <div className="mt-6 text-sm text-[#d8cec2]">CHUELRY · Gold Price Board</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
