export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <p className="text-hotline text-xs font-semibold tracking-widest uppercase mb-3">
              Hotline 2026
            </p>
            <h3 className="font-mantou text-xl text-white mb-4">熱線募款感恩會</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              台灣同志諮詢熱線協會
              <br />
              Taiwan Tongzhi (LGBTQ+) Hotline Association
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">活動場次</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>台北 · 2026/07/18 · ZEPP NEW TAIPEI</li>
              <li>高雄 · 2026/08/15 · 國立科學工藝博物館</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">了解更多</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://hotline.org.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-hotline transition-colors"
                >
                  熱線協會官網
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © 2026 台灣同志諮詢熱線協會 · Together Stronger
        </div>
      </div>
    </footer>
  );
}
