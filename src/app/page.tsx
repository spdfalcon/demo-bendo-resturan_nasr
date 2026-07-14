import { extras, FEATURE_COUNT, featureGroups } from "@/data/features";
import { SiteHeader } from "@/components/SiteHeader";

const featureCountFa = String(FEATURE_COUNT).replace(
  /\d/g,
  (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)],
);

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero — one composition, brand first */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <div
          className="bg-drift absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, #c9d9cf 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 10% 80%, #e5c7b2 0%, transparent 50%), linear-gradient(165deg, #f7f1e8 0%, #ebe3d6 45%, #d9cfc0 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-[42%] bg-[linear-gradient(to_top,rgba(28,25,20,0.55),transparent)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.18]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231c1914' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
          <p className="animate-rise text-sm font-medium tracking-wide text-[var(--accent)] md:text-base">
            نرم‌افزار مدیریت رستوران
          </p>
          <h1 className="animate-rise-delay-1 mt-3 max-w-3xl text-[clamp(3.4rem,12vw,7.5rem)] font-black leading-[0.92] tracking-tight text-[var(--ink)]">
            بندو
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-9 text-[var(--ink-soft)] md:text-xl md:leading-10">
            هزینه واقعی هر آیتم منو، موجودی انبار، سفارش‌ها و گزارش‌ها را در یک
            جا می‌بینید — تا بدانید روی چه چیزی{" "}
            <span className="mark-underline font-semibold text-[var(--ink)]">
              سود می‌کنید
            </span>
            .
          </p>
          <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#features"
              className="rounded-md bg-[var(--ink)] px-5 py-3 text-base font-medium text-[var(--paper)] transition hover:bg-[var(--accent)]"
            >
              مشاهده امکانات
            </a>
            <a
              href="#cost"
              className="rounded-md border border-[var(--ink)]/25 bg-transparent px-5 py-3 text-base font-medium text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              قیمت تمام‌شده
            </a>
          </div>
        </div>
      </section>

      {/* Costing — product strength, not a vocabulary lesson */}
      <section
        id="cost"
        className="relative border-y border-[var(--line)] bg-[var(--paper)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold tracking-wide text-[var(--ember)]">
            قابلیت اصلی
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black leading-snug text-[var(--ink)] md:text-5xl md:leading-[1.15]">
            قیمت تمام‌شده هر آیتم منو
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--ink-soft)] md:text-xl md:leading-10">
            برای هر آیتم، مواد مصرفی را مشخص می‌کنید — مثلاً برای یک پرس چلوکباب:{" "}
            <strong className="font-semibold text-[var(--ink)]">
              ۱۸۰ گرم گوشت، ۲۵۰ گرم برنج و ۳۰ گرم روغن
            </strong>
            . بندو هزینه واقعی همان آیتم را حساب می‌کند و با هر فروش، موجودی
            انبار را به‌روز می‌کند.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {[
              {
                step: "۱",
                title: "مواد مصرفی هر آیتم",
                text: "نوع و مقدار مواد را برای هر آیتم منو ثبت می‌کنید.",
              },
              {
                step: "۲",
                title: "محاسبه هزینه",
                text: "قیمت تمام‌شده هر آیتم بر اساس مواد و نرخ خرید مشخص می‌شود.",
              },
              {
                step: "۳",
                title: "همگام با فروش",
                text: "بعد از هر سفارش، همان مواد از موجودی انبار کسر می‌شود.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[var(--paper)] px-6 py-8 transition duration-300 hover:bg-[var(--bg)]"
              >
                <span className="text-4xl font-black text-[var(--accent)]">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 leading-8 text-[var(--ink-soft)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--accent)]">
              امکانات نرم‌افزار
            </p>
            <h2 className="mt-3 text-3xl font-black text-[var(--ink)] md:text-5xl">
              {featureCountFa} امکان بندو
            </h2>
            <p className="mt-4 text-lg leading-9 text-[var(--ink-soft)]">
              از راه‌اندازی مجموعه تا فروش، انبار و گزارش‌ها — آنچه برای مدیریت
              روزمره رستوران لازم دارید.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 md:gap-3">
            {featureGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-md border border-[var(--line)] bg-[var(--paper)] px-3 py-2 text-sm text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {group.title}
              </a>
            ))}
          </div>

          <div className="mt-16 space-y-20">
            {featureGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <div className="mb-8 border-b border-[var(--line)] pb-6">
                  <h3 className="text-2xl font-black text-[var(--ink)] md:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-8 text-[var(--ink-soft)]">
                    {group.intro}
                  </p>
                </div>
                <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.n} className="flex gap-4">
                      <span className="mt-0.5 w-10 shrink-0 text-sm font-bold tabular-nums text-[var(--muted)]">
                        {String(item.n).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-[var(--ink)]">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 leading-8 text-[var(--ink-soft)]">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section
        id="extras"
        className="border-t border-[var(--line)] bg-[var(--ink)] py-20 text-[var(--paper)] md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">امکانات اضافه</h2>
          <p className="mt-3 max-w-xl text-lg leading-9 text-white/70">
            امکاناتی که کنار هستهٔ اصلی، کار روزمره را کامل‌تر می‌کنند.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {extras.map((item) => (
              <li key={item.title} className="border-t border-white/15 pt-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-8 text-white/65">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg-deep)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-bold text-[var(--ink)]">بندو · دمو امکانات</p>
          <p>نسخه نمایشی امکانات نرم‌افزار بندو.</p>
        </div>
      </footer>
    </div>
  );
}
