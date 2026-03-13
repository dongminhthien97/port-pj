import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Layers,
  Globe,
  Award,
  Wrench
} from 'lucide-react';
import { SectionHeading } from './components/SectionHeading';

export default function App() {
  const profileImageUrl = '/images/profile.jpg';
  const education = [
    {
      period: '2022年 - 2024年',
      major: '情報技術',
      school: '中央情報専門学校',
      location: '埼玉県新座市',
      note: '成績：良'
    },
    {
      period: '2020年 - 2022年',
      major: '日本語',
      school: 'KEN日本語学院',
      location: '千葉県松戸市',
      note: '日本語課程修了'
    }
  ];

  const experience = [
    {
      company: 'BAP Building ダナン',
      period: '2024年6月 - 2025年2月',
      role: 'BRSE',
      points: [
        '日越チーム間の情報差を解消し、意思決定と運営対応の速度を向上。',
        '資料・メール・レポート翻訳の品質を担保し、認識齟齬の発生を抑制。',
        '要求・フィードバックの伝達を整理し、運営プロセスの手戻りを削減。',
        '進捗・品質の可視化を行い、成果物検証と定期報告で安定運用を支援。',
        '開発/PM研修への参加を通じ、プロセス理解を深め橋渡し精度を向上。'
      ]
    },
    {
      company: 'AIKA ダナン',
      period: '2025年9月 - 現在',
      role: 'BRSE / Comtor',
      points: [
        '進捗・課題を継続的に可視化し、リスクの早期検知と対応を推進。',
        '顧客要件を分析・翻訳して明確化し、実装の精度と再現性を向上。',
        '顧客/開発の調整役として合意形成を支援し、コミュニケーション品質を向上。',
        'QA/QCと連携してテスト観点を整備し、品質基準の維持に貢献。',
        '仕様書/ガイドライン/マニュアルを整備し、運用の属人化を抑制。'
      ]
    }
  ];

  const projects = [
    {
      name: 'Artelia',
      period: '2026年3月 - 現在',
      role: 'Bridge Engineer / Comtor',
      summary:
        '図面注文管理Webシステムの開発に参画。要件翻訳と調整を通じて、顧客期待と実装品質の一致を推進。',
      stack: ['PHP', 'Laravel']
    },
    {
      name: 'Glocalist',
      period: '2025年9月 - 現在',
      role: 'Bridge Engineer / Comtor',
      summary:
        '海外法規制・リスク情報サイトのリニューアルに参画。要件確認からテスト/文書化まで一貫支援し、品質と運用性を強化。',
      stack: ['PHP', 'WordPress', 'MySQL']
    },
    {
      name: 'Tagger Travel',
      period: '2025年10月 - 2025年12月',
      role: 'Bridge Engineer / Comtor',
      summary:
        '航空券予約Webシステムの機能開発を推進。顧客要件の整理とAI連携の調整により、リリースの安定性を確保。',
      stack: ['PHP', 'Laravel', 'AI連携']
    },
    {
      name: 'Kamurai Tribe',
      period: '2024年6月 - 2025年2月',
      role: 'Bridge Engineer / Comtor',
      summary:
        'モバイルゲームの運用・機能追加を支援。仕様整理と実装調整により、運用品質と顧客満足を維持（サービス終了）。',
      stack: ['C#']
    },
    {
      name: 'Nekonihongo',
      period: '個人プロジェクト',
      role: 'Full-stack Developer',
      summary:
        '日本語学習者向けWebアプリを個人開発。学習管理機能を設計し、運用しやすいデータ構造とUIを整備。',
      stack: ['React', 'Java', 'Spring Boot', 'MySQL']
    },
    {
      name: 'Backlog',
      period: '個人プロジェクト',
      role: 'Full-stack Developer',
      summary:
        'タスク管理Webシステムを開発。進捗の見える化と担当割当の仕組みでチーム運用の効率化を支援。',
      stack: ['PHP', 'Java', 'Spring Boot', 'MySQL']
    }
  ];

  const skills = [
    {
      title: 'プログラミング言語',
      items: ['Java', 'JavaScript']
    },
    {
      title: 'フレームワーク / ライブラリ',
      items: ['Spring Boot', 'React']
    },
    {
      title: 'データベース',
      items: ['MySQL']
    },
    {
      title: 'ツール',
      items: ['Git', 'GitHub']
    },
    {
      title: '日本語',
      items: ['技術資料の読解力あり']
    }
  ];

  const certifications = [
    {
      year: '2022年',
      name: '日本語能力試験（JLPT）N2 合格'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#e8e3d8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b0f14]/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold tracking-wide text-[#f2e9d8]"
          >
            ドン・ミン・ティエン
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-6 text-sm"
          >
            <a href="#profile" className="text-[#cbbfa8] hover:text-white transition-colors">自己紹介</a>
            <a href="#education" className="text-[#cbbfa8] hover:text-white transition-colors">学歴</a>
            <a href="#experience" className="text-[#cbbfa8] hover:text-white transition-colors">職務経歴</a>
            <a href="#projects" className="text-[#cbbfa8] hover:text-white transition-colors">プロジェクト</a>
            <a href="#skills" className="text-[#cbbfa8] hover:text-white transition-colors">スキル</a>
            <a href="#contact" className="text-[#cbbfa8] hover:text-white transition-colors">連絡先</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,116,144,0.22),transparent_40%)]" />
        <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-white/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#cbbfa8] mb-4">ITスタッフ / BRSE・Comtor</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#f3ead7]">
              ドン・ミン・ティエン
              <span className="block text-lg md:text-2xl mt-4 text-[#b7c7b4]">
                日本企業と開発チームをつなぐブリッジとして、
                品質と信頼を守るコミュニケーションを実践しています。
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">BRSE</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Comtor</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Full-stack</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-6 py-3 bg-[#0f766e] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#0d6a62] transition-colors"
              >
                プロジェクトを見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                連絡する
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
          >
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="aspect-[4/5]">
                  <img
                    src={profileImageUrl}
                    alt="プロフィール写真"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#1f2937]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#cbbfa8]">電話</div>
                  <div className="text-lg">0905610866</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#1f2937]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#cbbfa8]">メール</div>
                  <div className="text-lg break-all">dongminhthiendn97@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#1f2937]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#cbbfa8]">住所</div>
                  <div className="text-lg">236 Ngu Hanh Son, Ngu Hanh Son, Da Nang市</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="自己紹介" subtitle="日本企業で成長し、価値を生み出したいと考えています" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-[#ddd3c4] leading-relaxed"
          >
            <p className="mb-6">
              こんにちは、私はドン・ミン・ティエンです。日本で情報技術を専攻して卒業し、こちらで生活・仕事をした経験があります。技術的な文書を読むスキルがあり、日本の職場文化に慣れており、日本企業で自分自身を成長させ、発展させたいと考えています。
            </p>
            <p>
              私は勤勉で誠実な性格で、独立して作業する能力もあり、チームでの協力も得意です。経験はまだありませんが、新しい知識を学び、迅速に環境に適応することができます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="学歴" subtitle="専門性と語学力の基盤" />
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#10161f] border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 text-[#b7c7b4] text-sm mb-2">
                  <GraduationCap className="w-4 h-4" />
                  {item.period}
                </div>
                <h3 className="text-xl font-semibold text-[#f3ead7] mb-1">{item.major}</h3>
                <p className="text-[#cbbfa8]">{item.school}</p>
                <p className="text-[#a5a199] text-sm">{item.location}</p>
                <p className="mt-4 text-sm text-[#d8cdbb]">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="職務経歴" subtitle="日本顧客との橋渡しと品質管理" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0f141b] border border-white/10 rounded-2xl p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="text-sm text-[#b7c7b4] flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#f3ead7]">{item.company}</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                    {item.role}
                  </div>
                </div>
                <ul className="text-[#d8cdbb] leading-relaxed space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx}>・{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="プロジェクト" subtitle="参画案件・個人開発" />
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[#0f141b] border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-[#f3ead7]">{project.name}</h3>
                  <span className="text-xs text-[#b7c7b4]">{project.period}</span>
                </div>
                <div className="text-sm text-[#cbbfa8] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {project.role}
                </div>
                <p className="text-[#d8cdbb] leading-relaxed mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-[#d7e2d1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="スキル" subtitle="開発とコミュニケーションを支える強み" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#10161f] border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 text-sm text-[#b7c7b4] mb-3">
                  <Wrench className="w-4 h-4" />
                  {skill.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-[#f0e7d6]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="資格" subtitle="語学能力の証明" />
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0f141b] border border-white/10 rounded-2xl p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#f5c97b]" />
                  <div>
                    <div className="text-sm text-[#b7c7b4]">{cert.year}</div>
                    <div className="text-lg text-[#f3ead7]">{cert.name}</div>
                  </div>
                </div>
                <Globe className="w-5 h-5 text-[#7dd3c7]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="連絡先" subtitle="お気軽にご連絡ください" />
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#10161f] border border-white/10 rounded-2xl p-6"
            >
              <Phone className="w-5 h-5 text-[#7dd3c7] mb-3" />
              <div className="text-sm text-[#b7c7b4]">電話</div>
              <div className="text-lg">0905610866</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-[#10161f] border border-white/10 rounded-2xl p-6"
            >
              <Mail className="w-5 h-5 text-[#f5c97b] mb-3" />
              <div className="text-sm text-[#b7c7b4]">メール</div>
              <div className="text-lg break-all">dongminhthiendn97@gmail.com</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#10161f] border border-white/10 rounded-2xl p-6"
            >
              <MapPin className="w-5 h-5 text-[#9ab3ff] mb-3" />
              <div className="text-sm text-[#b7c7b4]">住所</div>
              <div className="text-lg">236 Ngu Hanh Son, Ngu Hanh Son, Da Nang市</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-[#a5a199] text-sm">
          <p>© 2026 ドン・ミン・ティエン｜ITスタッフ ポートフォリオ</p>
        </div>
      </footer>
    </div>
  );
}





