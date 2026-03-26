import React, { useState, useMemo } from "react";

function parseNumber(text) {
  return Number(String(text).replace(/[^\d]/g, "")) || 0;
}

function formatNumber(num) {
  return new Intl.NumberFormat("ko-KR").format(num);
}

function autoParse(text) {
  const buy = text.match(/매입[^\d]*([\d,]+)/);
  const sell = text.match(/판매[^\d]*([\d,]+)/);

  return {
    buy: buy ? parseNumber(buy[1]) : 0,
    sell: sell ? parseNumber(sell[1]) : 0,
  };
}

export default function App() {
  const [sms, setSms] = useState("");
  const [base, setBase] = useState({
    gold24: 0,
    gold18: 0,
    gold14: 0,
    silver: 0,
  });

  const [margin, setMargin] = useState({
    gold24: 20000,
    gold18: 18000,
    gold14: 15000,
    silver: 3000,
  });

  const [ratio, setRatio] = useState({
    gold18: 0.75,
    gold14: 0.585,
  });

  const parsed = useMemo(() => autoParse(sms), [sms]);

  const apply = () => {
    const g24 = parsed.sell;

    setBase({
      gold24: g24,
      gold18: Math.round(g24 * ratio.gold18),
      gold14: Math.round(g24 * ratio.gold14),
      silver: base.silver,
    });
  };

  const sellPrice = (price, m) => price + m;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>금시세표 시스템</h2>

      <textarea
        value={sms}
        onChange={(e) => setSms(e.target.value)}
        placeholder="문자 붙여넣기"
        style={{ width: "100%", height: 120 }}
      />

      <br /><br />

      <button onClick={apply}>문자 적용</button>

      <hr />

      <h3>자동 인식</h3>
      <div>공장 매입: {formatNumber(parsed.buy)}원</div>
      <div>공장 판매(내 사입가): {formatNumber(parsed.sell)}원</div>

      <hr />

      <h3>환산 비율</h3>
      18K:
      <input
        value={ratio.gold18}
        onChange={(e) =>
          setRatio({ ...ratio, gold18: Number(e.target.value) })
        }
      />
      <br />
      14K:
      <input
        value={ratio.gold14}
        onChange={(e) =>
          setRatio({ ...ratio, gold14: Number(e.target.value) })
        }
      />

      <hr />

      <h3>시세표</h3>

      {["gold24", "gold18", "gold14", "silver"].map((k) => (
        <div key={k} style={{ marginBottom: 10 }}>
          <b>{k}</b><br />
          기준가:
          <input
            value={base[k]}
            onChange={(e) =>
              setBase({ ...base, [k]: parseNumber(e.target.value) })
            }
          />
          <br />
          마진:
          <input
            value={margin[k]}
            onChange={(e) =>
              setMargin({ ...margin, [k]: parseNumber(e.target.value) })
            }
          />
          <br />
          👉 판매가: {formatNumber(sellPrice(base[k], margin[k]))}원
        </div>
      ))}

      <hr />

      <h2>손님용 화면</h2>
      {["gold24", "gold18", "gold14", "silver"].map((k) => (
        <div key={k} style={{ fontSize: 24 }}>
          {k} : {formatNumber(sellPrice(base[k], margin[k]))}원
        </div>
      ))}
    </div>
  );
}