var lt = Object.defineProperty;
var ct = (e, t, i) => t in e ? lt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var m = (e, t, i) => (ct(e, typeof t != "symbol" ? t + "" : t, i), i);
var c = /* @__PURE__ */ ((e) => (e[e.SUCCESS = 0] = "SUCCESS", e[e.E2BIG = 1] = "E2BIG", e[e.EACCESS = 2] = "EACCESS", e[e.EADDRINUSE = 3] = "EADDRINUSE", e[e.EADDRNOTAVAIL = 4] = "EADDRNOTAVAIL", e[e.EAFNOSUPPORT = 5] = "EAFNOSUPPORT", e[e.EAGAIN = 6] = "EAGAIN", e[e.EALREADY = 7] = "EALREADY", e[e.EBADF = 8] = "EBADF", e[e.EBADMSG = 9] = "EBADMSG", e[e.EBUSY = 10] = "EBUSY", e[e.ECANCELED = 11] = "ECANCELED", e[e.ECHILD = 12] = "ECHILD", e[e.ECONNABORTED = 13] = "ECONNABORTED", e[e.ECONNREFUSED = 14] = "ECONNREFUSED", e[e.ECONNRESET = 15] = "ECONNRESET", e[e.EDEADLK = 16] = "EDEADLK", e[e.EDESTADDRREQ = 17] = "EDESTADDRREQ", e[e.EDOM = 18] = "EDOM", e[e.EDQUOT = 19] = "EDQUOT", e[e.EEXIST = 20] = "EEXIST", e[e.EFAULT = 21] = "EFAULT", e[e.EFBIG = 22] = "EFBIG", e[e.EHOSTUNREACH = 23] = "EHOSTUNREACH", e[e.EIDRM = 24] = "EIDRM", e[e.EILSEQ = 25] = "EILSEQ", e[e.EINPROGRESS = 26] = "EINPROGRESS", e[e.EINTR = 27] = "EINTR", e[e.EINVAL = 28] = "EINVAL", e[e.EIO = 29] = "EIO", e[e.EISCONN = 30] = "EISCONN", e[e.EISDIR = 31] = "EISDIR", e[e.ELOOP = 32] = "ELOOP", e[e.EMFILE = 33] = "EMFILE", e[e.EMLINK = 34] = "EMLINK", e[e.EMSGSIZE = 35] = "EMSGSIZE", e[e.EMULTIHOP = 36] = "EMULTIHOP", e[e.ENAMETOOLONG = 37] = "ENAMETOOLONG", e[e.ENETDOWN = 38] = "ENETDOWN", e[e.ENETRESET = 39] = "ENETRESET", e[e.ENETUNREACH = 40] = "ENETUNREACH", e[e.ENFILE = 41] = "ENFILE", e[e.ENOBUFS = 42] = "ENOBUFS", e[e.ENODEV = 43] = "ENODEV", e[e.ENOENT = 44] = "ENOENT", e[e.ENOEXEC = 45] = "ENOEXEC", e[e.ENOLCK = 46] = "ENOLCK", e[e.ENOLINK = 47] = "ENOLINK", e[e.ENOMEM = 48] = "ENOMEM", e[e.ENOMSG = 49] = "ENOMSG", e[e.ENOPROTOOPT = 50] = "ENOPROTOOPT", e[e.ENOSPC = 51] = "ENOSPC", e[e.ENOSYS = 52] = "ENOSYS", e[e.ENOTCONN = 53] = "ENOTCONN", e[e.ENOTDIR = 54] = "ENOTDIR", e[e.ENOTEMPTY = 55] = "ENOTEMPTY", e[e.ENOTRECOVERABLE = 56] = "ENOTRECOVERABLE", e[e.ENOTSOCK = 57] = "ENOTSOCK", e[e.ENOTSUP = 58] = "ENOTSUP", e[e.ENOTTY = 59] = "ENOTTY", e[e.ENXIO = 60] = "ENXIO", e[e.EOVERFLOW = 61] = "EOVERFLOW", e[e.EOWNERDEAD = 62] = "EOWNERDEAD", e[e.EPERM = 63] = "EPERM", e[e.EPIPE = 64] = "EPIPE", e[e.EPROTO = 65] = "EPROTO", e[e.EPROTONOSUPPORT = 66] = "EPROTONOSUPPORT", e[e.EPROTOTYPE = 67] = "EPROTOTYPE", e[e.ERANGE = 68] = "ERANGE", e[e.EROFS = 69] = "EROFS", e[e.ESPIPE = 70] = "ESPIPE", e[e.ESRCH = 71] = "ESRCH", e[e.ESTALE = 72] = "ESTALE", e[e.ETIMEDOUT = 73] = "ETIMEDOUT", e[e.ETXTBSY = 74] = "ETXTBSY", e[e.EXDEV = 75] = "EXDEV", e[e.ENOTCAPABLE = 76] = "ENOTCAPABLE", e))(c || {}), p = /* @__PURE__ */ ((e) => (e[e.REALTIME = 0] = "REALTIME", e[e.MONOTONIC = 1] = "MONOTONIC", e[e.PROCESS_CPUTIME_ID = 2] = "PROCESS_CPUTIME_ID", e[e.THREAD_CPUTIME_ID = 3] = "THREAD_CPUTIME_ID", e))(p || {}), y = /* @__PURE__ */ ((e) => (e[e.SET = 0] = "SET", e[e.CUR = 1] = "CUR", e[e.END = 2] = "END", e))(y || {}), X = /* @__PURE__ */ ((e) => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.BLOCK_DEVICE = 1] = "BLOCK_DEVICE", e[e.CHARACTER_DEVICE = 2] = "CHARACTER_DEVICE", e[e.DIRECTORY = 3] = "DIRECTORY", e[e.REGULAR_FILE = 4] = "REGULAR_FILE", e[e.SOCKET_DGRAM = 5] = "SOCKET_DGRAM", e[e.SOCKET_STREAM = 6] = "SOCKET_STREAM", e[e.SYMBOLIC_LINK = 7] = "SYMBOLIC_LINK", e))(X || {}), D = /* @__PURE__ */ ((e) => (e[e.DIR = 0] = "DIR", e))(D || {}), G = /* @__PURE__ */ ((e) => (e[e.CLOCK = 0] = "CLOCK", e[e.FD_READ = 1] = "FD_READ", e[e.FD_WRITE = 2] = "FD_WRITE", e))(G || {});
const st = {
  SYMLINK_FOLLOW: 1
  // As long as the resolved path corresponds to a symbolic
  // link, it is expanded.
}, T = {
  CREAT: 1,
  // Create file if it does not exist.
  DIRECTORY: 2,
  // Fail if not a directory.
  EXCL: 4,
  // Fail if file already exists.
  TRUNC: 8
  // Truncate file to size 0.
}, E = {
  APPEND: 1,
  // Append mode: Data written to the file is always appended to the file's end.
  DSYNC: 2,
  // Write according to synchronized I/O data integrity completion. Only the data stored in the file is synchronized.
  NONBLOCK: 4,
  // Non-blocking mode.
  RSYNC: 8,
  // Synchronized read I/O operations.
  SYNC: 16
  // Write according to synchronized I/O file integrity completion. In addition to synchronizing the data stored in the file, the implementation may also synchronously update the file's metadata.
}, u = {
  FD_DATASYNC: BigInt(1) << BigInt(0),
  FD_READ: BigInt(1) << BigInt(1),
  FD_SEEK: BigInt(1) << BigInt(2),
  FD_FDSTAT_SET_FLAGS: BigInt(1) << BigInt(3),
  FD_SYNC: BigInt(1) << BigInt(4),
  FD_TELL: BigInt(1) << BigInt(5),
  FD_WRITE: BigInt(1) << BigInt(6),
  FD_ADVISE: BigInt(1) << BigInt(7),
  FD_ALLOCATE: BigInt(1) << BigInt(8),
  PATH_CREATE_DIRECTORY: BigInt(1) << BigInt(9),
  PATH_CREATE_FILE: BigInt(1) << BigInt(10),
  PATH_LINK_SOURCE: BigInt(1) << BigInt(11),
  PATH_LINK_TARGET: BigInt(1) << BigInt(12),
  PATH_OPEN: BigInt(1) << BigInt(13),
  FD_READDIR: BigInt(1) << BigInt(14),
  PATH_READLINK: BigInt(1) << BigInt(15),
  PATH_RENAME_SOURCE: BigInt(1) << BigInt(16),
  PATH_RENAME_TARGET: BigInt(1) << BigInt(17),
  PATH_FILESTAT_GET: BigInt(1) << BigInt(18),
  PATH_FILESTAT_SET_SIZE: BigInt(1) << BigInt(19),
  PATH_FILESTAT_SET_TIMES: BigInt(1) << BigInt(20),
  FD_FILESTAT_GET: BigInt(1) << BigInt(21),
  FD_FILESTAT_SET_SIZE: BigInt(1) << BigInt(22),
  FD_FILESTAT_SET_TIMES: BigInt(1) << BigInt(23),
  PATH_SYMLINK: BigInt(1) << BigInt(24),
  PATH_REMOVE_DIRECTORY: BigInt(1) << BigInt(25),
  PATH_UNLINK_FILE: BigInt(1) << BigInt(26),
  POLL_FD_READWRITE: BigInt(1) << BigInt(27),
  SOCK_SHUTDOWN: BigInt(1) << BigInt(28),
  SOCK_ACCEPT: BigInt(1) << BigInt(29)
}, U = {
  ATIM: 1,
  // Adjust the last data access timestamp to the value stored in filestat::atim.
  ATIM_NOW: 2,
  // Adjust the last data access timestamp to the time of clock clockid::realtime.
  MTIM: 4,
  // Adjust the last data modification timestamp to the value stored in filestat::mtim.
  MTIM_NOW: 8
  // Adjust the last data modification timestamp to the time of clock clockid::realtime.
}, $ = {
  SUBSCRIPTION_CLOCK_ABSTIME: 1
  // If set, treat the timestamp provided in subscription_clock::timeout as an absolute timestamp of clock subscription_clock::id. If clear, treat the timestamp provided in subscription_clock::timeout relative to the current time value of clock subscription_clock::id.
}, dt = {
  FD_READWRITE_HANGUP: 1
  // The peer of this socket has closed or disconnected.
}, O = 64, M = 48, x = 32, bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Clock: p,
  EVENT_SIZE: x,
  EventReadWriteFlags: dt,
  EventType: G,
  FILESTAT_SIZE: O,
  FileDescriptorFlags: E,
  FileStatTimestampFlags: U,
  FileType: X,
  LookupFlags: st,
  OpenFlags: T,
  PreopenType: D,
  Result: c,
  RightsFlags: u,
  SUBSCRIPTION_SIZE: M,
  SubscriptionClockFlags: $,
  Whence: y
}, Symbol.toStringTag, { value: "Module" }));
var Y = /* @__PURE__ */ ((e) => (e[e.CUR = 0] = "CUR", e[e.END = 1] = "END", e[e.SET = 2] = "SET", e))(Y || {});
class at {
  constructor(t) {
    m(this, "fs");
    m(this, "nextFD", 10);
    m(this, "openMap", /* @__PURE__ */ new Map());
    this.fs = { ...t }, this.openMap.set(3, new S(this.fs, "/"));
  }
  //
  // Helpers
  //
  openFile(t, i, n) {
    const l = new b(t, n);
    i && (l.buffer = new Uint8Array(new ArrayBuffer(1024), 0, 0));
    const s = this.nextFD;
    return this.openMap.set(s, l), this.nextFD++, [c.SUCCESS, s];
  }
  openDir(t, i) {
    const n = new S(t, i), l = this.nextFD;
    return this.openMap.set(l, n), this.nextFD++, [c.SUCCESS, l];
  }
  hasDir(t, i) {
    return i === "." ? !0 : t.containsDirectory(i);
  }
  //
  // Public Interface
  //
  open(t, i, n, l) {
    const s = !!(n & T.CREAT), d = !!(n & T.DIRECTORY), V = !!(n & T.EXCL), a = !!(n & T.TRUNC), Z = this.openMap.get(t);
    if (!(Z instanceof S))
      return [c.EBADF];
    if (Z.containsFile(i))
      return d ? [c.ENOTDIR] : V ? [c.EEXIST] : this.openFile(Z.get(i), a, l);
    if (this.hasDir(Z, i)) {
      if (i === ".")
        return this.openDir(this.fs, "/");
      const h = `/${i}/`, r = Object.entries(this.fs).filter(([o]) => o.startsWith(h));
      return this.openDir(Object.fromEntries(r), h);
    } else {
      if (s) {
        const h = Z.fullPath(i);
        return this.fs[h] = {
          path: h,
          mode: "binary",
          content: new Uint8Array(),
          timestamps: {
            access: /* @__PURE__ */ new Date(),
            modification: /* @__PURE__ */ new Date(),
            change: /* @__PURE__ */ new Date()
          }
        }, this.openFile(this.fs[h], a, l);
      }
      return [c.ENOTCAPABLE];
    }
  }
  close(t) {
    if (!this.openMap.has(t))
      return c.EBADF;
    const i = this.openMap.get(t);
    return i instanceof b && i.sync(), this.openMap.delete(t), c.SUCCESS;
  }
  read(t, i) {
    const n = this.openMap.get(t);
    return !n || n instanceof S ? [c.EBADF] : [c.SUCCESS, n.read(i)];
  }
  pread(t, i, n) {
    const l = this.openMap.get(t);
    return !l || l instanceof S ? [c.EBADF] : [c.SUCCESS, l.pread(i, n)];
  }
  write(t, i) {
    const n = this.openMap.get(t);
    return !n || n instanceof S ? c.EBADF : (n.write(i), c.SUCCESS);
  }
  pwrite(t, i, n) {
    const l = this.openMap.get(t);
    return !l || l instanceof S ? c.EBADF : (l.pwrite(i, n), c.SUCCESS);
  }
  sync(t) {
    const i = this.openMap.get(t);
    return !i || i instanceof S ? c.EBADF : (i.sync(), c.SUCCESS);
  }
  seek(t, i, n) {
    const l = this.openMap.get(t);
    return !l || l instanceof S ? [c.EBADF] : [c.SUCCESS, l.seek(i, n)];
  }
  tell(t) {
    const i = this.openMap.get(t);
    return !i || i instanceof S ? [c.EBADF] : [c.SUCCESS, i.tell()];
  }
  renumber(t, i) {
    return !this.exists(t) || !this.exists(i) ? c.EBADF : (t === i || (this.close(i), this.openMap.set(i, this.openMap.get(t))), c.SUCCESS);
  }
  unlink(t, i) {
    const n = this.openMap.get(t);
    if (!(n instanceof S))
      return c.EBADF;
    if (!n.contains(i))
      return c.ENOENT;
    for (const l of Object.keys(this.fs))
      (l === n.fullPath(i) || l.startsWith(`${n.fullPath(i)}/`)) && delete this.fs[l];
    return c.SUCCESS;
  }
  rename(t, i, n, l) {
    const s = this.openMap.get(t), d = this.openMap.get(n);
    if (!(s instanceof S) || !(d instanceof S))
      return c.EBADF;
    if (!s.contains(i))
      return c.ENOENT;
    if (d.contains(l))
      return c.EEXIST;
    const V = s.fullPath(i), a = d.fullPath(l);
    for (const Z of Object.keys(this.fs))
      if (Z.startsWith(V)) {
        const h = Z.replace(V, a);
        this.fs[h] = this.fs[Z], this.fs[h].path = h, delete this.fs[Z];
      }
    return c.SUCCESS;
  }
  list(t) {
    const i = this.openMap.get(t);
    return i instanceof S ? [c.SUCCESS, i.list()] : [c.EBADF];
  }
  stat(t) {
    const i = this.openMap.get(t);
    return i instanceof b ? [c.SUCCESS, i.stat()] : [c.EBADF];
  }
  pathStat(t, i) {
    const n = this.openMap.get(t);
    if (!(n instanceof S))
      return [c.EBADF];
    if (n.containsFile(i)) {
      const l = n.fullPath(i), s = new b(this.fs[l], 0).stat();
      return [c.SUCCESS, s];
    } else if (this.hasDir(n, i)) {
      if (i === ".")
        return [c.SUCCESS, new S(this.fs, "/").stat()];
      const l = `/${i}/`, s = Object.entries(this.fs).filter(([V]) => V.startsWith(l)), d = new S(Object.fromEntries(s), l).stat();
      return [c.SUCCESS, d];
    } else
      return [c.ENOTCAPABLE];
  }
  setFlags(t, i) {
    const n = this.openMap.get(t);
    return n instanceof b ? (n.setFlags(i), c.SUCCESS) : c.EBADF;
  }
  setSize(t, i) {
    const n = this.openMap.get(t);
    return n instanceof b ? (n.setSize(Number(i)), c.SUCCESS) : c.EBADF;
  }
  setAccessTime(t, i) {
    const n = this.openMap.get(t);
    return n instanceof b ? (n.setAccessTime(i), c.SUCCESS) : c.EBADF;
  }
  setModificationTime(t, i) {
    const n = this.openMap.get(t);
    return n instanceof b ? (n.setModificationTime(i), c.SUCCESS) : c.EBADF;
  }
  pathSetAccessTime(t, i, n) {
    const l = this.openMap.get(t);
    if (!(l instanceof S))
      return c.EBADF;
    const s = l.get(i);
    if (!s)
      return c.ENOTCAPABLE;
    const d = new b(s, 0);
    return d.setAccessTime(n), d.sync(), c.SUCCESS;
  }
  pathSetModificationTime(t, i, n) {
    const l = this.openMap.get(t);
    if (!(l instanceof S))
      return c.EBADF;
    const s = l.get(i);
    if (!s)
      return c.ENOTCAPABLE;
    const d = new b(s, 0);
    return d.setModificationTime(n), d.sync(), c.SUCCESS;
  }
  pathCreateDir(t, i) {
    const n = this.openMap.get(t);
    if (!(n instanceof S))
      return c.EBADF;
    if (n.contains(i))
      return c.ENOTCAPABLE;
    const l = `${n.fullPath(i)}/.runno`;
    return this.fs[l] = {
      path: l,
      timestamps: {
        access: /* @__PURE__ */ new Date(),
        modification: /* @__PURE__ */ new Date(),
        change: /* @__PURE__ */ new Date()
      },
      mode: "string",
      content: ""
    }, c.SUCCESS;
  }
  //
  // Public Helpers
  //
  exists(t) {
    return this.openMap.has(t);
  }
  fileType(t) {
    const i = this.openMap.get(t);
    return i ? i instanceof b ? X.REGULAR_FILE : X.DIRECTORY : X.UNKNOWN;
  }
  fileFdflags(t) {
    const i = this.openMap.get(t);
    return i instanceof b ? i.fdflags : 0;
  }
}
class b {
  constructor(t, i) {
    m(this, "file");
    m(this, "buffer");
    m(this, "_offset", BigInt(0));
    m(this, "isDirty", !1);
    m(this, "fdflags");
    m(this, "flagAppend");
    m(this, "flagDSync");
    m(this, "flagNonBlock");
    m(this, "flagRSync");
    m(this, "flagSync");
    if (this.file = t, this.file.mode === "string") {
      const n = new TextEncoder();
      this.buffer = n.encode(this.file.content);
    } else
      this.buffer = this.file.content;
    this.fdflags = i, this.flagAppend = !!(i & E.APPEND), this.flagDSync = !!(i & E.DSYNC), this.flagNonBlock = !!(i & E.NONBLOCK), this.flagRSync = !!(i & E.RSYNC), this.flagSync = !!(i & E.SYNC);
  }
  get offset() {
    return Number(this._offset);
  }
  read(t) {
    const i = this.buffer.subarray(this.offset, this.offset + t);
    return this._offset += BigInt(i.length), i;
  }
  pread(t, i) {
    return this.buffer.subarray(i, i + t);
  }
  write(t) {
    if (this.isDirty = !0, this.flagAppend) {
      const i = this.buffer.length;
      this.resize(i + t.byteLength), this.buffer.set(t, i);
    } else {
      const i = Math.max(
        this.offset + t.byteLength,
        this.buffer.byteLength
      );
      this.resize(i), this.buffer.set(t, this.offset), this._offset += BigInt(t.byteLength);
    }
    (this.flagDSync || this.flagSync) && this.sync();
  }
  pwrite(t, i) {
    if (this.isDirty = !0, this.flagAppend) {
      const n = this.buffer.length;
      this.resize(n + t.byteLength), this.buffer.set(t, n);
    } else {
      const n = Math.max(
        i + t.byteLength,
        this.buffer.byteLength
      );
      this.resize(n), this.buffer.set(t, i);
    }
    (this.flagDSync || this.flagSync) && this.sync();
  }
  sync() {
    if (!this.isDirty)
      return;
    if (this.isDirty = !1, this.file.mode === "binary") {
      this.file.content = new Uint8Array(this.buffer);
      return;
    }
    const t = new TextDecoder();
    this.file.content = t.decode(this.buffer);
  }
  seek(t, i) {
    switch (i) {
      case y.SET:
        this._offset = t;
        break;
      case y.CUR:
        this._offset += t;
        break;
      case y.END:
        this._offset = BigInt(this.buffer.length) + t;
        break;
    }
    return this._offset;
  }
  tell() {
    return this._offset;
  }
  stat() {
    return {
      path: this.file.path,
      timestamps: this.file.timestamps,
      type: X.REGULAR_FILE,
      byteLength: this.buffer.length
    };
  }
  setFlags(t) {
    this.fdflags = t;
  }
  setSize(t) {
    this.resize(t);
  }
  setAccessTime(t) {
    this.file.timestamps.access = t;
  }
  setModificationTime(t) {
    this.file.timestamps.modification = t;
  }
  /**
   * Resizes the buffer to be exactly requiredBytes length, while resizing the
   * underlying buffer to be larger if necessary.
   *
   * Resizing will internally double the buffer size to reduce the need for
   * resizing often.
   *
   * @param requiredBytes how many bytes the buffer needs to have available
   */
  resize(t) {
    if (t <= this.buffer.buffer.byteLength) {
      this.buffer = new Uint8Array(this.buffer.buffer, 0, t);
      return;
    }
    let i;
    this.buffer.buffer.byteLength === 0 ? i = new ArrayBuffer(t < 1024 ? 1024 : t * 2) : t > this.buffer.buffer.byteLength * 2 ? i = new ArrayBuffer(t * 2) : i = new ArrayBuffer(this.buffer.buffer.byteLength * 2);
    const n = new Uint8Array(i, 0, t);
    n.set(this.buffer), this.buffer = n;
  }
}
function C(e, t) {
  const i = t.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&"), n = new RegExp(`^${i}`);
  return e.replace(n, "");
}
class S {
  // full folder path including /
  constructor(t, i) {
    m(this, "dir");
    m(this, "prefix");
    this.dir = t, this.prefix = i;
  }
  containsFile(t) {
    for (const i of Object.keys(this.dir))
      if (C(i, this.prefix) === t)
        return !0;
    return !1;
  }
  containsDirectory(t) {
    for (const i of Object.keys(this.dir))
      if (C(i, this.prefix).startsWith(`${t}/`))
        return !0;
    return !1;
  }
  contains(t) {
    for (const i of Object.keys(this.dir)) {
      const n = C(i, this.prefix);
      if (n === t || n.startsWith(`${t}/`))
        return !0;
    }
    return !1;
  }
  get(t) {
    return this.dir[this.fullPath(t)];
  }
  fullPath(t) {
    return `${this.prefix}${t}`;
  }
  list() {
    const t = [], i = /* @__PURE__ */ new Set();
    for (const n of Object.keys(this.dir)) {
      const l = C(n, this.prefix);
      if (l.includes("/")) {
        const s = l.split("/")[0];
        if (i.has(s))
          continue;
        i.add(s), t.push({ name: s, type: X.DIRECTORY });
      } else
        t.push({
          name: l,
          type: X.REGULAR_FILE
        });
    }
    return t;
  }
  stat() {
    return {
      path: this.prefix,
      timestamps: {
        access: /* @__PURE__ */ new Date(),
        modification: /* @__PURE__ */ new Date(),
        change: /* @__PURE__ */ new Date()
      },
      type: X.DIRECTORY,
      byteLength: 0
    };
  }
}
let z = [];
function f(e) {
  z.push(e);
}
function Vt() {
  const e = z;
  return z = [], e;
}
class q {
  constructor(t) {
    m(this, "instance");
    m(this, "module");
    m(this, "memory");
    m(this, "context");
    m(this, "drive");
    m(this, "initialized", !1);
    this.context = t, this.drive = new at(t.fs);
  }
  static async start(t, i, mm) {
    const n = new q(i), l = await WebAssembly.instantiateStreaming(t, {
      env: mm.env,
      JS: mm.JS,
      wasi_snapshot_preview1: n.getImports("preview1", i.debug),
      wasi_unstable: n.getImports("unstable", i.debug)
    });
    n.memory = mm.env.memory;
    return n.init(l), n.start();
  }
  init(t) {
    this.instance = t.instance, this.module = t.module, this.memory = this.memory || this.instance.exports.memory, this.initialized = !0;
  }
  start() {
    if (!this.initialized)
      throw new Error("WASI must be initialized with init(wasm) first");
    const t = this.instance.exports._start;
    try {
      t();
    } catch (i) {
      if (i instanceof w)
        return {
          exitCode: i.code,
          fs: this.drive.fs
        };
      if (i instanceof WebAssembly.RuntimeError)
        return {
          exitCode: 134,
          fs: this.drive.fs
        };
      throw i;
    }
    return {
      instance: this.instance,
      exitCode: 0,
      fs: this.drive.fs
    };
  }
  getImports(t, i) {
    const n = {
      args_get: this.args_get.bind(this),
      args_sizes_get: this.args_sizes_get.bind(this),
      clock_res_get: this.clock_res_get.bind(this),
      clock_time_get: this.clock_time_get.bind(this),
      environ_get: this.environ_get.bind(this),
      environ_sizes_get: this.environ_sizes_get.bind(this),
      proc_exit: this.proc_exit.bind(this),
      random_get: this.random_get.bind(this),
      sched_yield: this.sched_yield.bind(this),
      // File Descriptors
      fd_advise: this.fd_advise.bind(this),
      fd_allocate: this.fd_allocate.bind(this),
      fd_close: this.fd_close.bind(this),
      fd_datasync: this.fd_datasync.bind(this),
      fd_fdstat_get: this.fd_fdstat_get.bind(this),
      fd_fdstat_set_flags: this.fd_fdstat_set_flags.bind(this),
      fd_fdstat_set_rights: this.fd_fdstat_set_rights.bind(this),
      fd_filestat_get: this.fd_filestat_get.bind(this),
      fd_filestat_set_size: this.fd_filestat_set_size.bind(this),
      fd_filestat_set_times: this.fd_filestat_set_times.bind(this),
      fd_pread: this.fd_pread.bind(this),
      fd_prestat_dir_name: this.fd_prestat_dir_name.bind(this),
      fd_prestat_get: this.fd_prestat_get.bind(this),
      fd_pwrite: this.fd_pwrite.bind(this),
      fd_read: this.fd_read.bind(this),
      fd_readdir: this.fd_readdir.bind(this),
      fd_renumber: this.fd_renumber.bind(this),
      fd_seek: this.fd_seek.bind(this),
      fd_sync: this.fd_sync.bind(this),
      fd_tell: this.fd_tell.bind(this),
      fd_write: this.fd_write.bind(this),
      // Paths
      path_filestat_get: this.path_filestat_get.bind(this),
      path_filestat_set_times: this.path_filestat_set_times.bind(this),
      path_open: this.path_open.bind(this),
      path_rename: this.path_rename.bind(this),
      path_unlink_file: this.path_unlink_file.bind(this),
      path_create_directory: this.path_create_directory.bind(this),
      // Unimplemented
      path_link: this.path_link.bind(this),
      path_readlink: this.path_readlink.bind(this),
      path_remove_directory: this.path_remove_directory.bind(this),
      path_symlink: this.path_symlink.bind(this),
      poll_oneoff: this.poll_oneoff.bind(this),
      proc_raise: this.proc_raise.bind(this),
      sock_accept: this.sock_accept.bind(this),
      sock_recv: this.sock_recv.bind(this),
      sock_send: this.sock_send.bind(this),
      sock_shutdown: this.sock_shutdown.bind(this),
      // Unimplemented - WASMEdge compatibility
      sock_open: this.sock_open.bind(this),
      sock_listen: this.sock_listen.bind(this),
      sock_connect: this.sock_connect.bind(this),
      sock_setsockopt: this.sock_setsockopt.bind(this),
      sock_bind: this.sock_bind.bind(this),
      sock_getlocaladdr: this.sock_getlocaladdr.bind(this),
      sock_getpeeraddr: this.sock_getpeeraddr.bind(this),
      sock_getaddrinfo: this.sock_getaddrinfo.bind(this)
    };
    t === "unstable" && (n.path_filestat_get = this.unstable_path_filestat_get.bind(this), n.fd_filestat_get = this.unstable_fd_filestat_get.bind(this), n.fd_seek = this.unstable_fd_seek.bind(this));
    for (const [l, s] of Object.entries(n))
      n[l] = function() {
        let d = s.apply(this, arguments);
        if (i) {
          const V = Vt();
          d = i(l, [...arguments], d, V) ?? d;
        }
        return d;
      };
    return n;
  }
  //
  // Helpers
  //
  get envArray() {
    return Object.entries(this.context.env).map(
      ([t, i]) => `${t}=${i}`
    );
  }
  //
  // WASI Implementation
  //
  /**
   * Read command-line argument data. The size of the array should match that
   * returned by args_sizes_get. Each argument is expected to be \0 terminated.
   */
  args_get(t, i) {
    const n = new DataView(this.memory.buffer);
    for (const l of this.context.args) {
      n.setUint32(t, i, !0), t += 4;
      const s = new TextEncoder().encode(`${l}\0`);
      new Uint8Array(
        this.memory.buffer,
        i,
        s.byteLength
      ).set(s), i += s.byteLength;
    }
    return c.SUCCESS;
  }
  /**
   * Return command-line argument data sizes.
   */
  args_sizes_get(t, i) {
    const n = this.context.args, l = n.reduce((d, V) => d + new TextEncoder().encode(`${V}\0`).byteLength, 0), s = new DataView(this.memory.buffer);
    return s.setUint32(t, n.length, !0), s.setUint32(i, l, !0), c.SUCCESS;
  }
  /**
   * Return the resolution of a clock. Implementations are required to provide a
   * non-zero value for supported clocks. For unsupported clocks, return
   * errno::inval. Note: This is similar to clock_getres in POSIX.
   */
  clock_res_get(t, i) {
    switch (t) {
      case p.REALTIME:
      case p.MONOTONIC:
      case p.PROCESS_CPUTIME_ID:
      case p.THREAD_CPUTIME_ID:
        return new DataView(this.memory.buffer).setBigUint64(i, BigInt(1e6), !0), c.SUCCESS;
    }
    return c.EINVAL;
  }
  /**
   * Return the time value of a clock.
   * Note: This is similar to clock_gettime in POSIX.
   */
  clock_time_get(t, i, n) {
    switch (t) {
      case p.REALTIME:
      case p.MONOTONIC:
      case p.PROCESS_CPUTIME_ID:
      case p.THREAD_CPUTIME_ID:
        return new DataView(this.memory.buffer).setBigUint64(n, L(/* @__PURE__ */ new Date()), !0), c.SUCCESS;
    }
    return c.EINVAL;
  }
  /**
   * Read environment variable data. The sizes of the buffers should match that
   * returned by environ_sizes_get. Key/value pairs are expected to be joined
   * with =s, and terminated with \0s.
   */
  environ_get(t, i) {
    const n = new DataView(this.memory.buffer);
    for (const l of this.envArray) {
      n.setUint32(t, i, !0), t += 4;
      const s = new TextEncoder().encode(`${l}\0`);
      new Uint8Array(
        this.memory.buffer,
        i,
        s.byteLength
      ).set(s), i += s.byteLength;
    }
    return c.SUCCESS;
  }
  /**
   * Return environment variable data sizes.
   */
  environ_sizes_get(t, i) {
    const n = this.envArray.reduce((s, d) => s + new TextEncoder().encode(`${d}\0`).byteLength, 0), l = new DataView(this.memory.buffer);
    return l.setUint32(t, this.envArray.length, !0), l.setUint32(i, n, !0), c.SUCCESS;
  }
  /**
   * Terminate the process normally. An exit code of 0 indicates successful
   * termination of the program. The meanings of other values is dependent on
   * the environment.
   */
  proc_exit(t) {
    throw new w(t);
  }
  /**
   * Write high-quality random data into a buffer. This function blocks when the
   * implementation is unable to immediately provide sufficient high-quality
   * random data. This function may execute slowly, so when large mounts of
   * random data are required, it's advisable to use this function to seed a
   * pseudo-random number generator, rather than to provide the random data
   * directly.
   */
  random_get(t, i) {
    const n = new Uint8Array(this.memory.buffer, t, i);
    return crypto.getRandomValues(n), c.SUCCESS;
  }
  /**
   * Temporarily yield execution of the calling thread.
   * Note: This is similar to sched_yield in POSIX.
   */
  sched_yield() {
    return c.SUCCESS;
  }
  //
  // File Descriptors
  //
  /**
   * Read from a file descriptor. Note: This is similar to readv in POSIX.
   */
  fd_read(t, i, n, l) {
    if (t === 1 || t === 2)
      return c.ENOTSUP;
    const s = new DataView(this.memory.buffer), d = K(s, i, n), V = new TextEncoder();
    let a = 0, Z = c.SUCCESS;
    for (const h of d) {
      let r;
      if (t === 0) {
        const R = this.context.stdin(h.byteLength);
        if (!R)
          break;
        r = V.encode(R);
      } else {
        const [R, k] = this.drive.read(t, h.byteLength);
        if (R) {
          Z = R;
          break;
        } else
          r = k;
      }
      const o = Math.min(h.byteLength, r.byteLength);
      h.set(r.subarray(0, o)), a += o;
    }
    return f({ bytesRead: a }), s.setUint32(l, a, !0), Z;
  }
  /**
   * Write to a file descriptor. Note: This is similar to writev in POSIX.
   */
  fd_write(t, i, n, l) {
    if (t === 0)
      return c.ENOTSUP;
    const s = new DataView(this.memory.buffer), d = K(s, i, n), V = new TextDecoder();
    let a = 0, Z = c.SUCCESS;
    for (const h of d)
      if (h.byteLength !== 0) {
        if (t === 1 || t === 2) {
          const r = t === 1 ? this.context.stdout : this.context.stderr, o = V.decode(h);
          r(o), f({ output: o });
        } else if (Z = this.drive.write(t, h), Z != c.SUCCESS)
          break;
        a += h.byteLength;
      }
    return s.setUint32(l, a, !0), Z;
  }
  /**
   * Provide file advisory information on a file descriptor.
   * Note: This is similar to posix_fadvise in POSIX.
   */
  fd_advise() {
    return c.SUCCESS;
  }
  /**
   * Force the allocation of space in a file.
   * Note: This is similar to posix_fallocate in POSIX.
   */
  fd_allocate(t, i, n) {
    return this.drive.pwrite(
      t,
      new Uint8Array(Number(n)),
      Number(i)
    );
  }
  /**
   * Close a file descriptor.
   * Note: This is similar to close in POSIX.
   *
   * @param fd
   */
  fd_close(t) {
    return this.drive.close(t);
  }
  /**
   * Synchronize the data of a file to disk.
   * Note: This is similar to fdatasync in POSIX.
   *
   * @param fd
   */
  fd_datasync(t) {
    return this.drive.sync(t);
  }
  /**
   * Get the attributes of a file descriptor.
   * Note: This returns similar flags to fsync(fd, F_GETFL) in POSIX,
   * as well as additional fields.
   *
   * Returns fdstat - the buffer where the file descriptor's attributes
   * are stored.
   *
   * @returns Result<fdstat, errno>
   */
  fd_fdstat_get(t, i) {
    if (t < 3) {
      let V;
      if (this.context.isTTY) {
        const Z = B ^ u.FD_SEEK ^ u.FD_TELL;
        V = J(X.CHARACTER_DEVICE, 0, Z);
      } else
        V = J(X.CHARACTER_DEVICE, 0);
      return new Uint8Array(
        this.memory.buffer,
        i,
        V.byteLength
      ).set(V), c.SUCCESS;
    }
    if (!this.drive.exists(t))
      return c.EBADF;
    const n = this.drive.fileType(t), l = this.drive.fileFdflags(t), s = J(n, l);
    return new Uint8Array(
      this.memory.buffer,
      i,
      s.byteLength
    ).set(s), c.SUCCESS;
  }
  /**
   * Adjust the flags associated with a file descriptor.
   * Note: This is similar to fcntl(fd, F_SETFL, flags) in POSIX.
   */
  fd_fdstat_set_flags(t, i) {
    return this.drive.setFlags(t, i);
  }
  /**
   * Adjust the rights associated with a file descriptor. This can only be used
   * to remove rights, and returns errno::notcapable if called in a way that
   * would attempt to add rights
   */
  fd_fdstat_set_rights() {
    return c.SUCCESS;
  }
  /**
   * Return the attributes of an open file.
   */
  fd_filestat_get(t, i) {
    return this.shared_fd_filestat_get(t, i, "preview1");
  }
  /**
   * Return the attributes of an open file.
   * This version is used
   */
  unstable_fd_filestat_get(t, i) {
    return this.shared_fd_filestat_get(t, i, "unstable");
  }
  /**
   * Return the attributes of an open file.
   */
  shared_fd_filestat_get(t, i, n) {
    const l = n === "unstable" ? A : _;
    if (t < 3) {
      let Z;
      switch (t) {
        case 0:
          Z = "/dev/stdin";
          break;
        case 1:
          Z = "/dev/stdout";
          break;
        case 2:
          Z = "/dev/stderr";
          break;
        default:
          Z = "/dev/undefined";
          break;
      }
      const h = l({
        path: Z,
        byteLength: 0,
        timestamps: {
          access: /* @__PURE__ */ new Date(),
          modification: /* @__PURE__ */ new Date(),
          change: /* @__PURE__ */ new Date()
        },
        type: X.CHARACTER_DEVICE
      });
      return new Uint8Array(
        this.memory.buffer,
        i,
        h.byteLength
      ).set(h), c.SUCCESS;
    }
    const [s, d] = this.drive.stat(t);
    if (s != c.SUCCESS)
      return s;
    f({ resolvedPath: d.path, stat: d });
    const V = l(d);
    return new Uint8Array(
      this.memory.buffer,
      i,
      V.byteLength
    ).set(V), c.SUCCESS;
  }
  /**
   * Adjust the size of an open file. If this increases the file's size, the
   * extra bytes are filled with zeros. Note: This is similar to ftruncate in
   * POSIX.
   */
  fd_filestat_set_size(t, i) {
    return this.drive.setSize(t, i);
  }
  /**
   * Adjust the timestamps of an open file or directory.
   * Note: This is similar to futimens in POSIX.
   */
  fd_filestat_set_times(t, i, n, l) {
    let s = null;
    l & U.ATIM && (s = W(i)), l & U.ATIM_NOW && (s = /* @__PURE__ */ new Date());
    let d = null;
    if (l & U.MTIM && (d = W(n)), l & U.MTIM_NOW && (d = /* @__PURE__ */ new Date()), s) {
      const V = this.drive.setAccessTime(t, s);
      if (V != c.SUCCESS)
        return V;
    }
    if (d) {
      const V = this.drive.setModificationTime(t, d);
      if (V != c.SUCCESS)
        return V;
    }
    return c.SUCCESS;
  }
  /**
   * Read from a file descriptor, without using and updating the file
   * descriptor's offset. Note: This is similar to preadv in POSIX.
   */
  fd_pread(t, i, n, l, s) {
    if (t === 1 || t === 2)
      return c.ENOTSUP;
    if (t === 0)
      return this.fd_read(t, i, n, s);
    const d = new DataView(this.memory.buffer), V = K(d, i, n);
    let a = 0, Z = c.SUCCESS;
    for (const h of V) {
      const [r, o] = this.drive.pread(
        t,
        h.byteLength,
        Number(l) + a
      );
      if (r !== c.SUCCESS) {
        Z = r;
        break;
      }
      const R = Math.min(h.byteLength, o.byteLength);
      h.set(o.subarray(0, R)), a += R;
    }
    return d.setUint32(s, a, !0), Z;
  }
  /**
   * Return a description of the given preopened file descriptor.
   */
  fd_prestat_dir_name(t, i, n) {
    if (t !== 3)
      return c.EBADF;
    const l = new TextEncoder().encode("/");
    return new Uint8Array(this.memory.buffer, i, n).set(l.subarray(0, n)), c.SUCCESS;
  }
  /**
   * Return a description of the given preopened file descriptor.
   */
  fd_prestat_get(t, i) {
    if (t !== 3)
      return c.EBADF;
    const n = new TextEncoder().encode("."), l = new DataView(this.memory.buffer, i);
    return l.setUint8(0, D.DIR), l.setUint32(4, n.byteLength, !0), c.SUCCESS;
  }
  /**
   * Write to a file descriptor, without using and updating the file
   * descriptor's offset. Note: This is similar to pwritev in POSIX.
   */
  fd_pwrite(t, i, n, l, s) {
    if (t === 0)
      return c.ENOTSUP;
    if (t === 1 || t === 2)
      return this.fd_write(t, i, n, s);
    const d = new DataView(this.memory.buffer), V = K(d, i, n);
    let a = 0, Z = c.SUCCESS;
    for (const h of V)
      if (h.byteLength !== 0) {
        if (Z = this.drive.pwrite(t, h, Number(l)), Z != c.SUCCESS)
          break;
        a += h.byteLength;
      }
    return d.setUint32(s, a, !0), Z;
  }
  /**
   * Read directory entries from a directory. When successful, the contents of
   * the output buffer consist of a sequence of directory entries. Each
   * directory entry consists of a dirent object, followed by dirent::d_namlen
   * bytes holding the name of the directory entry. This function fills the
   * output buffer as much as possible, potentially truncating the last
   * directory entry. This allows the caller to grow its read buffer size in
   * case it's too small to fit a single large directory entry, or skip the
   * oversized directory entry.
   */
  fd_readdir(t, i, n, l, s) {
    const [d, V] = this.drive.list(t);
    if (d != c.SUCCESS)
      return d;
    let a = [], Z = 0;
    for (const { name: N, type: F } of V) {
      const g = ht(N, F, Z);
      a.push(g), Z++;
    }
    a = a.slice(Number(l));
    const h = a.reduce((N, F) => N + F.byteLength, 0), r = new Uint8Array(h);
    let o = 0;
    for (const N of a)
      r.set(N, o), o += N.byteLength;
    const R = new Uint8Array(this.memory.buffer, i, n), k = r.subarray(0, n);
    return R.set(k), new DataView(this.memory.buffer).setUint32(s, k.byteLength, !0), c.SUCCESS;
  }
  /**
   * Atomically replace a file descriptor by renumbering another file
   * descriptor. Due to the strong focus on thread safety, this environment does
   * not provide a mechanism to duplicate or renumber a file descriptor to an
   * arbitrary number, like dup2(). This would be prone to race conditions, as
   * an actual file descriptor with the same number could be allocated by a
   * different thread at the same time. This function provides a way to
   * atomically renumber file descriptors, which would disappear if dup2() were
   * to be removed entirely.
   */
  fd_renumber(t, i) {
    return this.drive.renumber(t, i);
  }
  /**
   * Move the offset of a file descriptor.
   *
   * The offset is specified as a bigint here
   * Note: This is similar to lseek in POSIX.
   *
   * The offset, and return type are FileSize (u64) which is represented by
   * bigint in JavaScript.
   */
  fd_seek(t, i, n, l) {
    const [s, d] = this.drive.seek(t, i, n);
    return s !== c.SUCCESS || (f({ newOffset: d.toString() }), new DataView(this.memory.buffer).setBigUint64(l, d, !0)), s;
  }
  unstable_fd_seek(t, i, n, l) {
    const s = mt[n];
    return this.fd_seek(t, i, s, l);
  }
  /**
   * Synchronize the data and metadata of a file to disk.
   * Note: This is similar to fsync in POSIX.
   */
  fd_sync(t) {
    return this.drive.sync(t);
  }
  /**
   * Return the current offset of a file descriptor.
   * Note: This is similar to lseek(fd, 0, SEEK_CUR) in POSIX.
   *
   * The return type is FileSize (u64) which is represented by bigint in JS.
   *
   */
  fd_tell(t, i) {
    const [n, l] = this.drive.tell(t);
    return n !== c.SUCCESS || new DataView(this.memory.buffer).setBigUint64(i, l, !0), n;
  }
  //
  // Paths
  //
  path_filestat_get(t, i, n, l, s) {
    return this.shared_path_filestat_get(
      t,
      i,
      n,
      l,
      s,
      "preview1"
    );
  }
  unstable_path_filestat_get(t, i, n, l, s) {
    return this.shared_path_filestat_get(
      t,
      i,
      n,
      l,
      s,
      "unstable"
    );
  }
  /**
   * Return the attributes of a file or directory.
   * Note: This is similar to stat in POSIX.
   */
  shared_path_filestat_get(t, i, n, l, s, d) {
    const V = d === "unstable" ? A : _, a = new TextDecoder().decode(
      new Uint8Array(this.memory.buffer, n, l)
    );
    f({ path: a });
    const [Z, h] = this.drive.pathStat(t, a);
    if (Z != c.SUCCESS)
      return Z;
    const r = V(h);
    return new Uint8Array(
      this.memory.buffer,
      s,
      r.byteLength
    ).set(r), Z;
  }
  /**
   * Adjust the timestamps of a file or directory.
   * Note: This is similar to utimensat in POSIX.
   */
  path_filestat_set_times(t, i, n, l, s, d, V) {
    let a = null;
    V & U.ATIM && (a = W(s)), V & U.ATIM_NOW && (a = /* @__PURE__ */ new Date());
    let Z = null;
    V & U.MTIM && (Z = W(d)), V & U.MTIM_NOW && (Z = /* @__PURE__ */ new Date());
    const h = new TextDecoder().decode(
      new Uint8Array(this.memory.buffer, n, l)
    );
    if (a) {
      const r = this.drive.pathSetAccessTime(t, h, a);
      if (r != c.SUCCESS)
        return r;
    }
    if (Z) {
      const r = this.drive.pathSetModificationTime(
        t,
        h,
        Z
      );
      if (r != c.SUCCESS)
        return r;
    }
    return c.SUCCESS;
  }
  /**
   * Open a file or directory. The returned file descriptor is not guaranteed to
   * be the lowest-numbered file descriptor not currently open; it is randomized
   * to prevent applications from depending on making assumptions about indexes,
   * since this is error-prone in multi-threaded contexts. The returned file
   * descriptor is guaranteed to be less than 2**31.
   * Note: This is similar to openat in POSIX.
   * @param fd: fd
   * @param dirflags: lookupflags Flags determining the method of how the path
   *                  is resolved. Not supported by Runno (symlinks)
   * @param path: string The relative path of the file or directory to open,
   *              relative to the path_open::fd directory.
   * @param oflags: oflags The method by which to open the file.
   * @param fs_rights_base: rights The initial rights of the newly created file
   *                        descriptor. The implementation is allowed to return
   *                        a file descriptor with fewer rights than specified,
   *                        if and only if those rights do not apply to the type
   *                        of file being opened. The base rights are rights
   *                        that will apply to operations using the file
   *                        descriptor itself, while the inheriting rights are
   *                        rights that apply to file descriptors derived from
   *                        it.
   * @param fs_rights_inheriting: rights
   * @param fdflags: fdflags
   *
   */
  path_open(t, i, n, l, s, d, V, a, Z) {
    const h = new DataView(this.memory.buffer), r = I(this.memory, n, l), o = !!(s & T.CREAT), R = !!(s & T.DIRECTORY), k = !!(s & T.EXCL), P = !!(s & T.TRUNC), N = !!(a & E.APPEND), F = !!(a & E.DSYNC), g = !!(a & E.NONBLOCK), et = !!(a & E.RSYNC), it = !!(a & E.SYNC);
    f({
      path: r,
      openFlags: {
        createFileIfNone: o,
        failIfNotDir: R,
        failIfFileExists: k,
        truncateFile: P
      },
      fileDescriptorFlags: {
        flagAppend: N,
        flagDSync: F,
        flagNonBlock: g,
        flagRSync: et,
        flagSync: it
      }
    });
    const [Q, nt] = this.drive.open(t, r, s, a);
    return Q || (h.setUint32(Z, nt, !0), Q);
  }
  /**
   * Rename a file or directory. Note: This is similar to renameat in POSIX.
   */
  path_rename(t, i, n, l, s, d) {
    const V = I(this.memory, i, n), a = I(this.memory, s, d);
    return f({ oldPath: V, newPath: a }), this.drive.rename(t, V, l, a);
  }
  /**
   * Unlink a file. Return errno::isdir if the path refers to a directory.
   * Note: This is similar to unlinkat(fd, path, 0) in POSIX.
   */
  path_unlink_file(t, i, n) {
    const l = I(this.memory, i, n);
    return f({ path: l }), this.drive.unlink(t, l);
  }
  /**
   * Concurrently poll for the occurrence of a set of events.
   */
  poll_oneoff(t, i, n, l) {
    for (let d = 0; d < n; d++) {
      const V = new Uint8Array(
        this.memory.buffer,
        t + d * M,
        M
      ), a = Zt(V), Z = new Uint8Array(
        this.memory.buffer,
        i + d * x,
        x
      );
      let h = 0, r = c.SUCCESS;
      switch (a.type) {
        case G.CLOCK:
          for (; /* @__PURE__ */ new Date() < a.timeout; )
            ;
          Z.set(
            rt(a.userdata, c.SUCCESS)
          );
          break;
        case G.FD_READ:
          if (a.fd < 3)
            a.fd === 0 ? (r = c.SUCCESS, h = 32) : r = c.EBADF;
          else {
            const [o, R] = this.drive.stat(a.fd);
            r = o, h = R ? R.byteLength : 0;
          }
          Z.set(
            v(
              a.userdata,
              r,
              G.FD_READ,
              BigInt(h)
            )
          );
          break;
        case G.FD_WRITE:
          if (h = 0, r = c.SUCCESS, a.fd < 3)
            a.fd === 0 ? r = c.EBADF : (r = c.SUCCESS, h = 1024);
          else {
            const [o, R] = this.drive.stat(a.fd);
            r = o, h = R ? R.byteLength : 0;
          }
          Z.set(
            v(
              a.userdata,
              r,
              G.FD_READ,
              BigInt(h)
            )
          );
          break;
      }
    }
    return new DataView(this.memory.buffer, l, 4).setUint32(0, n, !0), c.SUCCESS;
  }
  /**
   * Create a directory. Note: This is similar to mkdirat in POSIX.
   */
  path_create_directory(t, i, n) {
    const l = I(this.memory, i, n);
    return this.drive.pathCreateDir(t, l);
  }
  //
  // Unimplemented - these operations are not supported by Runno
  //
  /**
   * Create a hard link. Note: This is similar to linkat in POSIX.
   */
  path_link() {
    return c.ENOSYS;
  }
  /**
   * Read the contents of a symbolic link.
   * Note: This is similar to readlinkat in POSIX.
   */
  path_readlink() {
    return c.ENOSYS;
  }
  /**
   * Remove a directory. Return errno::notempty if the directory is not empty.
   * Note: This is similar to unlinkat(fd, path, AT_REMOVEDIR) in POSIX.
   */
  path_remove_directory() {
    return c.ENOSYS;
  }
  /**
   * Create a symbolic link. Note: This is similar to symlinkat in POSIX.
   */
  path_symlink() {
    return c.ENOSYS;
  }
  /**
   * Send a signal to the process of the calling thread.
   * Note: This is similar to raise in POSIX.
   */
  proc_raise() {
    return c.ENOSYS;
  }
  /**
   * Accept a new incoming connection. Note: This is similar to accept in POSIX.
   */
  sock_accept() {
    return c.ENOSYS;
  }
  /**
   * Receive a message from a socket. Note: This is similar to recv in POSIX,
   * though it also supports reading the data into multiple buffers in the
   * manner of readv.
   */
  sock_recv() {
    return c.ENOSYS;
  }
  /**
   * Send a message on a socket. Note: This is similar to send in POSIX, though
   * it also supports writing the data from multiple buffers in the manner of
   * writev.
   */
  sock_send() {
    return c.ENOSYS;
  }
  /**
   * Shut down socket send and receive channels. Note: This is similar to
   * shutdown in POSIX.
   */
  sock_shutdown() {
    return c.ENOSYS;
  }
  //
  // Unimplemented - these are for compatibility with Wasmedge
  //
  sock_open() {
    return c.ENOSYS;
  }
  sock_listen() {
    return c.ENOSYS;
  }
  sock_connect() {
    return c.ENOSYS;
  }
  sock_setsockopt() {
    return c.ENOSYS;
  }
  sock_bind() {
    return c.ENOSYS;
  }
  sock_getlocaladdr() {
    return c.ENOSYS;
  }
  sock_getpeeraddr() {
    return c.ENOSYS;
  }
  sock_getaddrinfo() {
    return c.ENOSYS;
  }
}
const B = u.FD_DATASYNC | u.FD_READ | u.FD_SEEK | u.FD_FDSTAT_SET_FLAGS | u.FD_SYNC | u.FD_TELL | u.FD_WRITE | u.FD_ADVISE | u.FD_ALLOCATE | u.PATH_CREATE_DIRECTORY | u.PATH_CREATE_FILE | u.PATH_LINK_SOURCE | u.PATH_LINK_TARGET | u.PATH_OPEN | u.FD_READDIR | u.PATH_READLINK | u.PATH_RENAME_SOURCE | u.PATH_RENAME_TARGET | u.PATH_FILESTAT_GET | u.PATH_FILESTAT_SET_SIZE | u.PATH_FILESTAT_SET_TIMES | u.FD_FILESTAT_GET | u.FD_FILESTAT_SET_SIZE | u.FD_FILESTAT_SET_TIMES | u.PATH_SYMLINK | u.PATH_REMOVE_DIRECTORY | u.PATH_UNLINK_FILE | u.POLL_FD_READWRITE | u.SOCK_SHUTDOWN | u.SOCK_ACCEPT;
class w extends Error {
  constructor(i) {
    super();
    m(this, "code");
    this.code = i;
  }
}
function I(e, t, i) {
  return new TextDecoder().decode(new Uint8Array(e.buffer, t, i));
}
function K(e, t, i) {
  let n = Array(i);
  for (let l = 0; l < i; l++) {
    const s = e.getUint32(t, !0);
    t += 4;
    const d = e.getUint32(t, !0);
    t += 4, n[l] = new Uint8Array(e.buffer, s, d);
  }
  return n;
}
function Zt(e) {
  const t = new Uint8Array(8);
  t.set(e.subarray(0, 8));
  const i = e[8], n = new DataView(e.buffer, e.byteOffset + 9);
  switch (i) {
    case G.FD_READ:
    case G.FD_WRITE:
      return {
        userdata: t,
        type: i,
        fd: n.getUint32(0, !0)
      };
    case G.CLOCK:
      const l = n.getUint16(24, !0), s = L(/* @__PURE__ */ new Date()), d = n.getBigUint64(8, !0), V = n.getBigUint64(16, !0), a = l & $.SUBSCRIPTION_CLOCK_ABSTIME ? d : s + d;
      return {
        userdata: t,
        type: i,
        id: n.getUint32(0, !0),
        timeout: W(a),
        precision: W(a + V)
      };
  }
}
function _(e) {
  const t = new Uint8Array(O), i = new DataView(t.buffer);
  return i.setBigUint64(0, BigInt(0), !0), i.setBigUint64(8, BigInt(H(e.path)), !0), i.setUint8(16, e.type), i.setBigUint64(24, BigInt(1), !0), i.setBigUint64(32, BigInt(e.byteLength), !0), i.setBigUint64(40, L(e.timestamps.access), !0), i.setBigUint64(48, L(e.timestamps.modification), !0), i.setBigUint64(56, L(e.timestamps.change), !0), t;
}
function A(e) {
  const t = new Uint8Array(O), i = new DataView(t.buffer);
  return i.setBigUint64(0, BigInt(0), !0), i.setBigUint64(8, BigInt(H(e.path)), !0), i.setUint8(16, e.type), i.setUint32(20, 1, !0), i.setBigUint64(24, BigInt(e.byteLength), !0), i.setBigUint64(32, L(e.timestamps.access), !0), i.setBigUint64(40, L(e.timestamps.modification), !0), i.setBigUint64(48, L(e.timestamps.change), !0), t;
}
function J(e, t, i) {
  const n = i ?? B, l = i ?? B, s = new Uint8Array(24), d = new DataView(s.buffer, 0, 24);
  return d.setUint8(0, e), d.setUint32(2, t, !0), d.setBigUint64(8, n, !0), d.setBigUint64(16, l, !0), s;
}
function ht(e, t, i) {
  const n = new TextEncoder().encode(e), l = 24 + n.byteLength, s = new Uint8Array(l), d = new DataView(s.buffer);
  return d.setBigUint64(0, BigInt(i + 1), !0), d.setBigUint64(8, BigInt(H(e)), !0), d.setUint32(16, n.length, !0), d.setUint8(20, t), s.set(n, 24), s;
}
function rt(e, t) {
  const i = new Uint8Array(32);
  i.set(e, 0);
  const n = new DataView(i.buffer);
  return n.setUint16(8, t, !0), n.setUint16(10, G.CLOCK, !0), i;
}
function v(e, t, i, n) {
  const l = new Uint8Array(32);
  l.set(e, 0);
  const s = new DataView(l.buffer);
  return s.setUint16(8, t, !0), s.setUint16(10, i, !0), s.setBigUint64(16, n, !0), l;
}
function H(e, t = 0) {
  let i = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let l = 0, s; l < e.length; l++)
    s = e.charCodeAt(l), i = Math.imul(i ^ s, 2654435761), n = Math.imul(n ^ s, 1597334677);
  return i = Math.imul(i ^ i >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(i ^ i >>> 13, 3266489909), 4294967296 * (2097151 & n) + (i >>> 0);
}
function L(e) {
  return BigInt(e.getTime()) * BigInt(1e6);
}
function W(e) {
  return new Date(Number(e / BigInt(1e6)));
}
const mt = {
  [Y.CUR]: y.CUR,
  [Y.END]: y.END,
  [Y.SET]: y.SET
};
class Xt {
  constructor(t) {
    m(this, "fs");
    m(this, "args");
    // Program args (like from a terminal program)
    m(this, "env");
    // Environment (like a .env file)
    m(this, "stdin");
    m(this, "stdout");
    m(this, "stderr");
    m(this, "debug");
    m(this, "isTTY");
    this.fs = (t == null ? void 0 : t.fs) ?? {}, this.args = (t == null ? void 0 : t.args) ?? [], this.env = (t == null ? void 0 : t.env) ?? {}, this.stdin = (t == null ? void 0 : t.stdin) ?? (() => null), this.stdout = (t == null ? void 0 : t.stdout) ?? (() => {
    }), this.stderr = (t == null ? void 0 : t.stderr) ?? (() => {
    }), this.debug = t == null ? void 0 : t.debug, this.isTTY = !!(t != null && t.isTTY);
  }
}
const tt = "dmFyIHV0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgZ3Q9KHIsVCxEKT0+VCBpbiByP3V0KHIsVCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6RH0pOnJbVF09RDt2YXIgZD0ocixULEQpPT4oZ3Qocix0eXBlb2YgVCE9InN5bWJvbCI/VCsiIjpULEQpLEQpOyhmdW5jdGlvbigpeyJ1c2Ugc3RyaWN0Ijt2YXIgcj0oZT0+KGVbZS5TVUNDRVNTPTBdPSJTVUNDRVNTIixlW2UuRTJCSUc9MV09IkUyQklHIixlW2UuRUFDQ0VTUz0yXT0iRUFDQ0VTUyIsZVtlLkVBRERSSU5VU0U9M109IkVBRERSSU5VU0UiLGVbZS5FQUREUk5PVEFWQUlMPTRdPSJFQUREUk5PVEFWQUlMIixlW2UuRUFGTk9TVVBQT1JUPTVdPSJFQUZOT1NVUFBPUlQiLGVbZS5FQUdBSU49Nl09IkVBR0FJTiIsZVtlLkVBTFJFQURZPTddPSJFQUxSRUFEWSIsZVtlLkVCQURGPThdPSJFQkFERiIsZVtlLkVCQURNU0c9OV09IkVCQURNU0ciLGVbZS5FQlVTWT0xMF09IkVCVVNZIixlW2UuRUNBTkNFTEVEPTExXT0iRUNBTkNFTEVEIixlW2UuRUNISUxEPTEyXT0iRUNISUxEIixlW2UuRUNPTk5BQk9SVEVEPTEzXT0iRUNPTk5BQk9SVEVEIixlW2UuRUNPTk5SRUZVU0VEPTE0XT0iRUNPTk5SRUZVU0VEIixlW2UuRUNPTk5SRVNFVD0xNV09IkVDT05OUkVTRVQiLGVbZS5FREVBRExLPTE2XT0iRURFQURMSyIsZVtlLkVERVNUQUREUlJFUT0xN109IkVERVNUQUREUlJFUSIsZVtlLkVET009MThdPSJFRE9NIixlW2UuRURRVU9UPTE5XT0iRURRVU9UIixlW2UuRUVYSVNUPTIwXT0iRUVYSVNUIixlW2UuRUZBVUxUPTIxXT0iRUZBVUxUIixlW2UuRUZCSUc9MjJdPSJFRkJJRyIsZVtlLkVIT1NUVU5SRUFDSD0yM109IkVIT1NUVU5SRUFDSCIsZVtlLkVJRFJNPTI0XT0iRUlEUk0iLGVbZS5FSUxTRVE9MjVdPSJFSUxTRVEiLGVbZS5FSU5QUk9HUkVTUz0yNl09IkVJTlBST0dSRVNTIixlW2UuRUlOVFI9MjddPSJFSU5UUiIsZVtlLkVJTlZBTD0yOF09IkVJTlZBTCIsZVtlLkVJTz0yOV09IkVJTyIsZVtlLkVJU0NPTk49MzBdPSJFSVNDT05OIixlW2UuRUlTRElSPTMxXT0iRUlTRElSIixlW2UuRUxPT1A9MzJdPSJFTE9PUCIsZVtlLkVNRklMRT0zM109IkVNRklMRSIsZVtlLkVNTElOSz0zNF09IkVNTElOSyIsZVtlLkVNU0dTSVpFPTM1XT0iRU1TR1NJWkUiLGVbZS5FTVVMVElIT1A9MzZdPSJFTVVMVElIT1AiLGVbZS5FTkFNRVRPT0xPTkc9MzddPSJFTkFNRVRPT0xPTkciLGVbZS5FTkVURE9XTj0zOF09IkVORVRET1dOIixlW2UuRU5FVFJFU0VUPTM5XT0iRU5FVFJFU0VUIixlW2UuRU5FVFVOUkVBQ0g9NDBdPSJFTkVUVU5SRUFDSCIsZVtlLkVORklMRT00MV09IkVORklMRSIsZVtlLkVOT0JVRlM9NDJdPSJFTk9CVUZTIixlW2UuRU5PREVWPTQzXT0iRU5PREVWIixlW2UuRU5PRU5UPTQ0XT0iRU5PRU5UIixlW2UuRU5PRVhFQz00NV09IkVOT0VYRUMiLGVbZS5FTk9MQ0s9NDZdPSJFTk9MQ0siLGVbZS5FTk9MSU5LPTQ3XT0iRU5PTElOSyIsZVtlLkVOT01FTT00OF09IkVOT01FTSIsZVtlLkVOT01TRz00OV09IkVOT01TRyIsZVtlLkVOT1BST1RPT1BUPTUwXT0iRU5PUFJPVE9PUFQiLGVbZS5FTk9TUEM9NTFdPSJFTk9TUEMiLGVbZS5FTk9TWVM9NTJdPSJFTk9TWVMiLGVbZS5FTk9UQ09OTj01M109IkVOT1RDT05OIixlW2UuRU5PVERJUj01NF09IkVOT1RESVIiLGVbZS5FTk9URU1QVFk9NTVdPSJFTk9URU1QVFkiLGVbZS5FTk9UUkVDT1ZFUkFCTEU9NTZdPSJFTk9UUkVDT1ZFUkFCTEUiLGVbZS5FTk9UU09DSz01N109IkVOT1RTT0NLIixlW2UuRU5PVFNVUD01OF09IkVOT1RTVVAiLGVbZS5FTk9UVFk9NTldPSJFTk9UVFkiLGVbZS5FTlhJTz02MF09IkVOWElPIixlW2UuRU9WRVJGTE9XPTYxXT0iRU9WRVJGTE9XIixlW2UuRU9XTkVSREVBRD02Ml09IkVPV05FUkRFQUQiLGVbZS5FUEVSTT02M109IkVQRVJNIixlW2UuRVBJUEU9NjRdPSJFUElQRSIsZVtlLkVQUk9UTz02NV09IkVQUk9UTyIsZVtlLkVQUk9UT05PU1VQUE9SVD02Nl09IkVQUk9UT05PU1VQUE9SVCIsZVtlLkVQUk9UT1RZUEU9NjddPSJFUFJPVE9UWVBFIixlW2UuRVJBTkdFPTY4XT0iRVJBTkdFIixlW2UuRVJPRlM9NjldPSJFUk9GUyIsZVtlLkVTUElQRT03MF09IkVTUElQRSIsZVtlLkVTUkNIPTcxXT0iRVNSQ0giLGVbZS5FU1RBTEU9NzJdPSJFU1RBTEUiLGVbZS5FVElNRURPVVQ9NzNdPSJFVElNRURPVVQiLGVbZS5FVFhUQlNZPTc0XT0iRVRYVEJTWSIsZVtlLkVYREVWPTc1XT0iRVhERVYiLGVbZS5FTk9UQ0FQQUJMRT03Nl09IkVOT1RDQVBBQkxFIixlKSkocnx8e30pLFQ9KGU9PihlW2UuUkVBTFRJTUU9MF09IlJFQUxUSU1FIixlW2UuTU9OT1RPTklDPTFdPSJNT05PVE9OSUMiLGVbZS5QUk9DRVNTX0NQVVRJTUVfSUQ9Ml09IlBST0NFU1NfQ1BVVElNRV9JRCIsZVtlLlRIUkVBRF9DUFVUSU1FX0lEPTNdPSJUSFJFQURfQ1BVVElNRV9JRCIsZSkpKFR8fHt9KSxEPShlPT4oZVtlLlNFVD0wXT0iU0VUIixlW2UuQ1VSPTFdPSJDVVIiLGVbZS5FTkQ9Ml09IkVORCIsZSkpKER8fHt9KSxBPShlPT4oZVtlLlVOS05PV049MF09IlVOS05PV04iLGVbZS5CTE9DS19ERVZJQ0U9MV09IkJMT0NLX0RFVklDRSIsZVtlLkNIQVJBQ1RFUl9ERVZJQ0U9Ml09IkNIQVJBQ1RFUl9ERVZJQ0UiLGVbZS5ESVJFQ1RPUlk9M109IkRJUkVDVE9SWSIsZVtlLlJFR1VMQVJfRklMRT00XT0iUkVHVUxBUl9GSUxFIixlW2UuU09DS0VUX0RHUkFNPTVdPSJTT0NLRVRfREdSQU0iLGVbZS5TT0NLRVRfU1RSRUFNPTZdPSJTT0NLRVRfU1RSRUFNIixlW2UuU1lNQk9MSUNfTElOSz03XT0iU1lNQk9MSUNfTElOSyIsZSkpKEF8fHt9KSxHPShlPT4oZVtlLkRJUj0wXT0iRElSIixlKSkoR3x8e30pLGI9KGU9PihlW2UuQ0xPQ0s9MF09IkNMT0NLIixlW2UuRkRfUkVBRD0xXT0iRkRfUkVBRCIsZVtlLkZEX1dSSVRFPTJdPSJGRF9XUklURSIsZSkpKGJ8fHt9KTtjb25zdCBOPXtDUkVBVDoxLERJUkVDVE9SWToyLEVYQ0w6NCxUUlVOQzo4fSxPPXtBUFBFTkQ6MSxEU1lOQzoyLE5PTkJMT0NLOjQsUlNZTkM6OCxTWU5DOjE2fSxfPXtGRF9EQVRBU1lOQzpCaWdJbnQoMSk8PEJpZ0ludCgwKSxGRF9SRUFEOkJpZ0ludCgxKTw8QmlnSW50KDEpLEZEX1NFRUs6QmlnSW50KDEpPDxCaWdJbnQoMiksRkRfRkRTVEFUX1NFVF9GTEFHUzpCaWdJbnQoMSk8PEJpZ0ludCgzKSxGRF9TWU5DOkJpZ0ludCgxKTw8QmlnSW50KDQpLEZEX1RFTEw6QmlnSW50KDEpPDxCaWdJbnQoNSksRkRfV1JJVEU6QmlnSW50KDEpPDxCaWdJbnQoNiksRkRfQURWSVNFOkJpZ0ludCgxKTw8QmlnSW50KDcpLEZEX0FMTE9DQVRFOkJpZ0ludCgxKTw8QmlnSW50KDgpLFBBVEhfQ1JFQVRFX0RJUkVDVE9SWTpCaWdJbnQoMSk8PEJpZ0ludCg5KSxQQVRIX0NSRUFURV9GSUxFOkJpZ0ludCgxKTw8QmlnSW50KDEwKSxQQVRIX0xJTktfU09VUkNFOkJpZ0ludCgxKTw8QmlnSW50KDExKSxQQVRIX0xJTktfVEFSR0VUOkJpZ0ludCgxKTw8QmlnSW50KDEyKSxQQVRIX09QRU46QmlnSW50KDEpPDxCaWdJbnQoMTMpLEZEX1JFQURESVI6QmlnSW50KDEpPDxCaWdJbnQoMTQpLFBBVEhfUkVBRExJTks6QmlnSW50KDEpPDxCaWdJbnQoMTUpLFBBVEhfUkVOQU1FX1NPVVJDRTpCaWdJbnQoMSk8PEJpZ0ludCgxNiksUEFUSF9SRU5BTUVfVEFSR0VUOkJpZ0ludCgxKTw8QmlnSW50KDE3KSxQQVRIX0ZJTEVTVEFUX0dFVDpCaWdJbnQoMSk8PEJpZ0ludCgxOCksUEFUSF9GSUxFU1RBVF9TRVRfU0laRTpCaWdJbnQoMSk8PEJpZ0ludCgxOSksUEFUSF9GSUxFU1RBVF9TRVRfVElNRVM6QmlnSW50KDEpPDxCaWdJbnQoMjApLEZEX0ZJTEVTVEFUX0dFVDpCaWdJbnQoMSk8PEJpZ0ludCgyMSksRkRfRklMRVNUQVRfU0VUX1NJWkU6QmlnSW50KDEpPDxCaWdJbnQoMjIpLEZEX0ZJTEVTVEFUX1NFVF9USU1FUzpCaWdJbnQoMSk8PEJpZ0ludCgyMyksUEFUSF9TWU1MSU5LOkJpZ0ludCgxKTw8QmlnSW50KDI0KSxQQVRIX1JFTU9WRV9ESVJFQ1RPUlk6QmlnSW50KDEpPDxCaWdJbnQoMjUpLFBBVEhfVU5MSU5LX0ZJTEU6QmlnSW50KDEpPDxCaWdJbnQoMjYpLFBPTExfRkRfUkVBRFdSSVRFOkJpZ0ludCgxKTw8QmlnSW50KDI3KSxTT0NLX1NIVVRET1dOOkJpZ0ludCgxKTw8QmlnSW50KDI4KSxTT0NLX0FDQ0VQVDpCaWdJbnQoMSk8PEJpZ0ludCgyOSl9LG09e0FUSU06MSxBVElNX05PVzoyLE1USU06NCxNVElNX05PVzo4fSxxPXtTVUJTQ1JJUFRJT05fQ0xPQ0tfQUJTVElNRToxfSxXPTY0LHo9NDgsJD0zMjt2YXIgTT0oZT0+KGVbZS5DVVI9MF09IkNVUiIsZVtlLkVORD0xXT0iRU5EIixlW2UuU0VUPTJdPSJTRVQiLGUpKShNfHx7fSk7Y2xhc3MgdHR7Y29uc3RydWN0b3IodCl7ZCh0aGlzLCJmcyIpO2QodGhpcywibmV4dEZEIiwxMCk7ZCh0aGlzLCJvcGVuTWFwIixuZXcgTWFwKTt0aGlzLmZzPXsuLi50fSx0aGlzLm9wZW5NYXAuc2V0KDMsbmV3IHUodGhpcy5mcywiLyIpKX1vcGVuRmlsZSh0LGksbil7Y29uc3Qgcz1uZXcgSSh0LG4pO2kmJihzLmJ1ZmZlcj1uZXcgVWludDhBcnJheShuZXcgQXJyYXlCdWZmZXIoMTAyNCksMCwwKSk7Y29uc3QgYT10aGlzLm5leHRGRDtyZXR1cm4gdGhpcy5vcGVuTWFwLnNldChhLHMpLHRoaXMubmV4dEZEKyssW3IuU1VDQ0VTUyxhXX1vcGVuRGlyKHQsaSl7Y29uc3Qgbj1uZXcgdSh0LGkpLHM9dGhpcy5uZXh0RkQ7cmV0dXJuIHRoaXMub3Blbk1hcC5zZXQocyxuKSx0aGlzLm5leHRGRCsrLFtyLlNVQ0NFU1Msc119aGFzRGlyKHQsaSl7cmV0dXJuIGk9PT0iLiI/ITA6dC5jb250YWluc0RpcmVjdG9yeShpKX1vcGVuKHQsaSxuLHMpe2NvbnN0IGE9ISEobiZOLkNSRUFUKSxmPSEhKG4mTi5ESVJFQ1RPUlkpLGM9ISEobiZOLkVYQ0wpLG89ISEobiZOLlRSVU5DKSxFPXRoaXMub3Blbk1hcC5nZXQodCk7aWYoIShFIGluc3RhbmNlb2YgdSkpcmV0dXJuW3IuRUJBREZdO2lmKEUuY29udGFpbnNGaWxlKGkpKXJldHVybiBmP1tyLkVOT1RESVJdOmM/W3IuRUVYSVNUXTp0aGlzLm9wZW5GaWxlKEUuZ2V0KGkpLG8scyk7aWYodGhpcy5oYXNEaXIoRSxpKSl7aWYoaT09PSIuIilyZXR1cm4gdGhpcy5vcGVuRGlyKHRoaXMuZnMsIi8iKTtjb25zdCBoPWAvJHtpfS9gLFM9T2JqZWN0LmVudHJpZXModGhpcy5mcykuZmlsdGVyKChbZ10pPT5nLnN0YXJ0c1dpdGgoaCkpO3JldHVybiB0aGlzLm9wZW5EaXIoT2JqZWN0LmZyb21FbnRyaWVzKFMpLGgpfWVsc2V7aWYoYSl7Y29uc3QgaD1FLmZ1bGxQYXRoKGkpO3JldHVybiB0aGlzLmZzW2hdPXtwYXRoOmgsbW9kZToiYmluYXJ5Iixjb250ZW50Om5ldyBVaW50OEFycmF5LHRpbWVzdGFtcHM6e2FjY2VzczpuZXcgRGF0ZSxtb2RpZmljYXRpb246bmV3IERhdGUsY2hhbmdlOm5ldyBEYXRlfX0sdGhpcy5vcGVuRmlsZSh0aGlzLmZzW2hdLG8scyl9cmV0dXJuW3IuRU5PVENBUEFCTEVdfX1jbG9zZSh0KXtpZighdGhpcy5vcGVuTWFwLmhhcyh0KSlyZXR1cm4gci5FQkFERjtjb25zdCBpPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIGkgaW5zdGFuY2VvZiBJJiZpLnN5bmMoKSx0aGlzLm9wZW5NYXAuZGVsZXRlKHQpLHIuU1VDQ0VTU31yZWFkKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiFufHxuIGluc3RhbmNlb2YgdT9bci5FQkFERl06W3IuU1VDQ0VTUyxuLnJlYWQoaSldfXByZWFkKHQsaSxuKXtjb25zdCBzPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIXN8fHMgaW5zdGFuY2VvZiB1P1tyLkVCQURGXTpbci5TVUNDRVNTLHMucHJlYWQoaSxuKV19d3JpdGUodCxpKXtjb25zdCBuPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIW58fG4gaW5zdGFuY2VvZiB1P3IuRUJBREY6KG4ud3JpdGUoaSksci5TVUNDRVNTKX1wd3JpdGUodCxpLG4pe2NvbnN0IHM9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4hc3x8cyBpbnN0YW5jZW9mIHU/ci5FQkFERjoocy5wd3JpdGUoaSxuKSxyLlNVQ0NFU1MpfXN5bmModCl7Y29uc3QgaT10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiFpfHxpIGluc3RhbmNlb2YgdT9yLkVCQURGOihpLnN5bmMoKSxyLlNVQ0NFU1MpfXNlZWsodCxpLG4pe2NvbnN0IHM9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4hc3x8cyBpbnN0YW5jZW9mIHU/W3IuRUJBREZdOltyLlNVQ0NFU1Mscy5zZWVrKGksbildfXRlbGwodCl7Y29uc3QgaT10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiFpfHxpIGluc3RhbmNlb2YgdT9bci5FQkFERl06W3IuU1VDQ0VTUyxpLnRlbGwoKV19cmVudW1iZXIodCxpKXtyZXR1cm4hdGhpcy5leGlzdHModCl8fCF0aGlzLmV4aXN0cyhpKT9yLkVCQURGOih0PT09aXx8KHRoaXMuY2xvc2UoaSksdGhpcy5vcGVuTWFwLnNldChpLHRoaXMub3Blbk1hcC5nZXQodCkpKSxyLlNVQ0NFU1MpfXVubGluayh0LGkpe2NvbnN0IG49dGhpcy5vcGVuTWFwLmdldCh0KTtpZighKG4gaW5zdGFuY2VvZiB1KSlyZXR1cm4gci5FQkFERjtpZighbi5jb250YWlucyhpKSlyZXR1cm4gci5FTk9FTlQ7Zm9yKGNvbnN0IHMgb2YgT2JqZWN0LmtleXModGhpcy5mcykpKHM9PT1uLmZ1bGxQYXRoKGkpfHxzLnN0YXJ0c1dpdGgoYCR7bi5mdWxsUGF0aChpKX0vYCkpJiZkZWxldGUgdGhpcy5mc1tzXTtyZXR1cm4gci5TVUNDRVNTfXJlbmFtZSh0LGksbixzKXtjb25zdCBhPXRoaXMub3Blbk1hcC5nZXQodCksZj10aGlzLm9wZW5NYXAuZ2V0KG4pO2lmKCEoYSBpbnN0YW5jZW9mIHUpfHwhKGYgaW5zdGFuY2VvZiB1KSlyZXR1cm4gci5FQkFERjtpZighYS5jb250YWlucyhpKSlyZXR1cm4gci5FTk9FTlQ7aWYoZi5jb250YWlucyhzKSlyZXR1cm4gci5FRVhJU1Q7Y29uc3QgYz1hLmZ1bGxQYXRoKGkpLG89Zi5mdWxsUGF0aChzKTtmb3IoY29uc3QgRSBvZiBPYmplY3Qua2V5cyh0aGlzLmZzKSlpZihFLnN0YXJ0c1dpdGgoYykpe2NvbnN0IGg9RS5yZXBsYWNlKGMsbyk7dGhpcy5mc1toXT10aGlzLmZzW0VdLHRoaXMuZnNbaF0ucGF0aD1oLGRlbGV0ZSB0aGlzLmZzW0VdfXJldHVybiByLlNVQ0NFU1N9bGlzdCh0KXtjb25zdCBpPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIGkgaW5zdGFuY2VvZiB1P1tyLlNVQ0NFU1MsaS5saXN0KCldOltyLkVCQURGXX1zdGF0KHQpe2NvbnN0IGk9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4gaSBpbnN0YW5jZW9mIEk/W3IuU1VDQ0VTUyxpLnN0YXQoKV06W3IuRUJBREZdfXBhdGhTdGF0KHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO2lmKCEobiBpbnN0YW5jZW9mIHUpKXJldHVybltyLkVCQURGXTtpZihuLmNvbnRhaW5zRmlsZShpKSl7Y29uc3Qgcz1uLmZ1bGxQYXRoKGkpLGE9bmV3IEkodGhpcy5mc1tzXSwwKS5zdGF0KCk7cmV0dXJuW3IuU1VDQ0VTUyxhXX1lbHNlIGlmKHRoaXMuaGFzRGlyKG4saSkpe2lmKGk9PT0iLiIpcmV0dXJuW3IuU1VDQ0VTUyxuZXcgdSh0aGlzLmZzLCIvIikuc3RhdCgpXTtjb25zdCBzPWAvJHtpfS9gLGE9T2JqZWN0LmVudHJpZXModGhpcy5mcykuZmlsdGVyKChbY10pPT5jLnN0YXJ0c1dpdGgocykpLGY9bmV3IHUoT2JqZWN0LmZyb21FbnRyaWVzKGEpLHMpLnN0YXQoKTtyZXR1cm5bci5TVUNDRVNTLGZdfWVsc2UgcmV0dXJuW3IuRU5PVENBUEFCTEVdfXNldEZsYWdzKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiBuIGluc3RhbmNlb2YgST8obi5zZXRGbGFncyhpKSxyLlNVQ0NFU1MpOnIuRUJBREZ9c2V0U2l6ZSh0LGkpe2NvbnN0IG49dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4gbiBpbnN0YW5jZW9mIEk/KG4uc2V0U2l6ZShOdW1iZXIoaSkpLHIuU1VDQ0VTUyk6ci5FQkFERn1zZXRBY2Nlc3NUaW1lKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiBuIGluc3RhbmNlb2YgST8obi5zZXRBY2Nlc3NUaW1lKGkpLHIuU1VDQ0VTUyk6ci5FQkFERn1zZXRNb2RpZmljYXRpb25UaW1lKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiBuIGluc3RhbmNlb2YgST8obi5zZXRNb2RpZmljYXRpb25UaW1lKGkpLHIuU1VDQ0VTUyk6ci5FQkFERn1wYXRoU2V0QWNjZXNzVGltZSh0LGksbil7Y29uc3Qgcz10aGlzLm9wZW5NYXAuZ2V0KHQpO2lmKCEocyBpbnN0YW5jZW9mIHUpKXJldHVybiByLkVCQURGO2NvbnN0IGE9cy5nZXQoaSk7aWYoIWEpcmV0dXJuIHIuRU5PVENBUEFCTEU7Y29uc3QgZj1uZXcgSShhLDApO3JldHVybiBmLnNldEFjY2Vzc1RpbWUobiksZi5zeW5jKCksci5TVUNDRVNTfXBhdGhTZXRNb2RpZmljYXRpb25UaW1lKHQsaSxuKXtjb25zdCBzPXRoaXMub3Blbk1hcC5nZXQodCk7aWYoIShzIGluc3RhbmNlb2YgdSkpcmV0dXJuIHIuRUJBREY7Y29uc3QgYT1zLmdldChpKTtpZighYSlyZXR1cm4gci5FTk9UQ0FQQUJMRTtjb25zdCBmPW5ldyBJKGEsMCk7cmV0dXJuIGYuc2V0TW9kaWZpY2F0aW9uVGltZShuKSxmLnN5bmMoKSxyLlNVQ0NFU1N9cGF0aENyZWF0ZURpcih0LGkpe2NvbnN0IG49dGhpcy5vcGVuTWFwLmdldCh0KTtpZighKG4gaW5zdGFuY2VvZiB1KSlyZXR1cm4gci5FQkFERjtpZihuLmNvbnRhaW5zKGkpKXJldHVybiByLkVOT1RDQVBBQkxFO2NvbnN0IHM9YCR7bi5mdWxsUGF0aChpKX0vLnJ1bm5vYDtyZXR1cm4gdGhpcy5mc1tzXT17cGF0aDpzLHRpbWVzdGFtcHM6e2FjY2VzczpuZXcgRGF0ZSxtb2RpZmljYXRpb246bmV3IERhdGUsY2hhbmdlOm5ldyBEYXRlfSxtb2RlOiJzdHJpbmciLGNvbnRlbnQ6IiJ9LHIuU1VDQ0VTU31leGlzdHModCl7cmV0dXJuIHRoaXMub3Blbk1hcC5oYXModCl9ZmlsZVR5cGUodCl7Y29uc3QgaT10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiBpP2kgaW5zdGFuY2VvZiBJP0EuUkVHVUxBUl9GSUxFOkEuRElSRUNUT1JZOkEuVU5LTk9XTn1maWxlRmRmbGFncyh0KXtjb25zdCBpPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIGkgaW5zdGFuY2VvZiBJP2kuZmRmbGFnczowfX1jbGFzcyBJe2NvbnN0cnVjdG9yKHQsaSl7ZCh0aGlzLCJmaWxlIik7ZCh0aGlzLCJidWZmZXIiKTtkKHRoaXMsIl9vZmZzZXQiLEJpZ0ludCgwKSk7ZCh0aGlzLCJpc0RpcnR5IiwhMSk7ZCh0aGlzLCJmZGZsYWdzIik7ZCh0aGlzLCJmbGFnQXBwZW5kIik7ZCh0aGlzLCJmbGFnRFN5bmMiKTtkKHRoaXMsImZsYWdOb25CbG9jayIpO2QodGhpcywiZmxhZ1JTeW5jIik7ZCh0aGlzLCJmbGFnU3luYyIpO2lmKHRoaXMuZmlsZT10LHRoaXMuZmlsZS5tb2RlPT09InN0cmluZyIpe2NvbnN0IG49bmV3IFRleHRFbmNvZGVyO3RoaXMuYnVmZmVyPW4uZW5jb2RlKHRoaXMuZmlsZS5jb250ZW50KX1lbHNlIHRoaXMuYnVmZmVyPXRoaXMuZmlsZS5jb250ZW50O3RoaXMuZmRmbGFncz1pLHRoaXMuZmxhZ0FwcGVuZD0hIShpJk8uQVBQRU5EKSx0aGlzLmZsYWdEU3luYz0hIShpJk8uRFNZTkMpLHRoaXMuZmxhZ05vbkJsb2NrPSEhKGkmTy5OT05CTE9DSyksdGhpcy5mbGFnUlN5bmM9ISEoaSZPLlJTWU5DKSx0aGlzLmZsYWdTeW5jPSEhKGkmTy5TWU5DKX1nZXQgb2Zmc2V0KCl7cmV0dXJuIE51bWJlcih0aGlzLl9vZmZzZXQpfXJlYWQodCl7Y29uc3QgaT10aGlzLmJ1ZmZlci5zdWJhcnJheSh0aGlzLm9mZnNldCx0aGlzLm9mZnNldCt0KTtyZXR1cm4gdGhpcy5fb2Zmc2V0Kz1CaWdJbnQoaS5sZW5ndGgpLGl9cHJlYWQodCxpKXtyZXR1cm4gdGhpcy5idWZmZXIuc3ViYXJyYXkoaSxpK3QpfXdyaXRlKHQpe2lmKHRoaXMuaXNEaXJ0eT0hMCx0aGlzLmZsYWdBcHBlbmQpe2NvbnN0IGk9dGhpcy5idWZmZXIubGVuZ3RoO3RoaXMucmVzaXplKGkrdC5ieXRlTGVuZ3RoKSx0aGlzLmJ1ZmZlci5zZXQodCxpKX1lbHNle2NvbnN0IGk9TWF0aC5tYXgodGhpcy5vZmZzZXQrdC5ieXRlTGVuZ3RoLHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO3RoaXMucmVzaXplKGkpLHRoaXMuYnVmZmVyLnNldCh0LHRoaXMub2Zmc2V0KSx0aGlzLl9vZmZzZXQrPUJpZ0ludCh0LmJ5dGVMZW5ndGgpfSh0aGlzLmZsYWdEU3luY3x8dGhpcy5mbGFnU3luYykmJnRoaXMuc3luYygpfXB3cml0ZSh0LGkpe2lmKHRoaXMuaXNEaXJ0eT0hMCx0aGlzLmZsYWdBcHBlbmQpe2NvbnN0IG49dGhpcy5idWZmZXIubGVuZ3RoO3RoaXMucmVzaXplKG4rdC5ieXRlTGVuZ3RoKSx0aGlzLmJ1ZmZlci5zZXQodCxuKX1lbHNle2NvbnN0IG49TWF0aC5tYXgoaSt0LmJ5dGVMZW5ndGgsdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7dGhpcy5yZXNpemUobiksdGhpcy5idWZmZXIuc2V0KHQsaSl9KHRoaXMuZmxhZ0RTeW5jfHx0aGlzLmZsYWdTeW5jKSYmdGhpcy5zeW5jKCl9c3luYygpe2lmKCF0aGlzLmlzRGlydHkpcmV0dXJuO2lmKHRoaXMuaXNEaXJ0eT0hMSx0aGlzLmZpbGUubW9kZT09PSJiaW5hcnkiKXt0aGlzLmZpbGUuY29udGVudD1uZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7cmV0dXJufWNvbnN0IHQ9bmV3IFRleHREZWNvZGVyO3RoaXMuZmlsZS5jb250ZW50PXQuZGVjb2RlKHRoaXMuYnVmZmVyKX1zZWVrKHQsaSl7c3dpdGNoKGkpe2Nhc2UgRC5TRVQ6dGhpcy5fb2Zmc2V0PXQ7YnJlYWs7Y2FzZSBELkNVUjp0aGlzLl9vZmZzZXQrPXQ7YnJlYWs7Y2FzZSBELkVORDp0aGlzLl9vZmZzZXQ9QmlnSW50KHRoaXMuYnVmZmVyLmxlbmd0aCkrdDticmVha31yZXR1cm4gdGhpcy5fb2Zmc2V0fXRlbGwoKXtyZXR1cm4gdGhpcy5fb2Zmc2V0fXN0YXQoKXtyZXR1cm57cGF0aDp0aGlzLmZpbGUucGF0aCx0aW1lc3RhbXBzOnRoaXMuZmlsZS50aW1lc3RhbXBzLHR5cGU6QS5SRUdVTEFSX0ZJTEUsYnl0ZUxlbmd0aDp0aGlzLmJ1ZmZlci5sZW5ndGh9fXNldEZsYWdzKHQpe3RoaXMuZmRmbGFncz10fXNldFNpemUodCl7dGhpcy5yZXNpemUodCl9c2V0QWNjZXNzVGltZSh0KXt0aGlzLmZpbGUudGltZXN0YW1wcy5hY2Nlc3M9dH1zZXRNb2RpZmljYXRpb25UaW1lKHQpe3RoaXMuZmlsZS50aW1lc3RhbXBzLm1vZGlmaWNhdGlvbj10fXJlc2l6ZSh0KXtpZih0PD10aGlzLmJ1ZmZlci5idWZmZXIuYnl0ZUxlbmd0aCl7dGhpcy5idWZmZXI9bmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIuYnVmZmVyLDAsdCk7cmV0dXJufWxldCBpO3RoaXMuYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoPT09MD9pPW5ldyBBcnJheUJ1ZmZlcih0PDEwMjQ/MTAyNDp0KjIpOnQ+dGhpcy5idWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGgqMj9pPW5ldyBBcnJheUJ1ZmZlcih0KjIpOmk9bmV3IEFycmF5QnVmZmVyKHRoaXMuYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoKjIpO2NvbnN0IG49bmV3IFVpbnQ4QXJyYXkoaSwwLHQpO24uc2V0KHRoaXMuYnVmZmVyKSx0aGlzLmJ1ZmZlcj1ufX1mdW5jdGlvbiBQKGUsdCl7Y29uc3QgaT10LnJlcGxhY2UoL1svXC1cXF4kKis/LigpfFtcXXt9XS9nLCJcXCQmIiksbj1uZXcgUmVnRXhwKGBeJHtpfWApO3JldHVybiBlLnJlcGxhY2UobiwiIil9Y2xhc3MgdXtjb25zdHJ1Y3Rvcih0LGkpe2QodGhpcywiZGlyIik7ZCh0aGlzLCJwcmVmaXgiKTt0aGlzLmRpcj10LHRoaXMucHJlZml4PWl9Y29udGFpbnNGaWxlKHQpe2Zvcihjb25zdCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuZGlyKSlpZihQKGksdGhpcy5wcmVmaXgpPT09dClyZXR1cm4hMDtyZXR1cm4hMX1jb250YWluc0RpcmVjdG9yeSh0KXtmb3IoY29uc3QgaSBvZiBPYmplY3Qua2V5cyh0aGlzLmRpcikpaWYoUChpLHRoaXMucHJlZml4KS5zdGFydHNXaXRoKGAke3R9L2ApKXJldHVybiEwO3JldHVybiExfWNvbnRhaW5zKHQpe2Zvcihjb25zdCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuZGlyKSl7Y29uc3Qgbj1QKGksdGhpcy5wcmVmaXgpO2lmKG49PT10fHxuLnN0YXJ0c1dpdGgoYCR7dH0vYCkpcmV0dXJuITB9cmV0dXJuITF9Z2V0KHQpe3JldHVybiB0aGlzLmRpclt0aGlzLmZ1bGxQYXRoKHQpXX1mdWxsUGF0aCh0KXtyZXR1cm5gJHt0aGlzLnByZWZpeH0ke3R9YH1saXN0KCl7Y29uc3QgdD1bXSxpPW5ldyBTZXQ7Zm9yKGNvbnN0IG4gb2YgT2JqZWN0LmtleXModGhpcy5kaXIpKXtjb25zdCBzPVAobix0aGlzLnByZWZpeCk7aWYocy5pbmNsdWRlcygiLyIpKXtjb25zdCBhPXMuc3BsaXQoIi8iKVswXTtpZihpLmhhcyhhKSljb250aW51ZTtpLmFkZChhKSx0LnB1c2goe25hbWU6YSx0eXBlOkEuRElSRUNUT1JZfSl9ZWxzZSB0LnB1c2goe25hbWU6cyx0eXBlOkEuUkVHVUxBUl9GSUxFfSl9cmV0dXJuIHR9c3RhdCgpe3JldHVybntwYXRoOnRoaXMucHJlZml4LHRpbWVzdGFtcHM6e2FjY2VzczpuZXcgRGF0ZSxtb2RpZmljYXRpb246bmV3IERhdGUsY2hhbmdlOm5ldyBEYXRlfSx0eXBlOkEuRElSRUNUT1JZLGJ5dGVMZW5ndGg6MH19fWxldCBrPVtdO2Z1bmN0aW9uIFUoZSl7ay5wdXNoKGUpfWZ1bmN0aW9uIGV0KCl7Y29uc3QgZT1rO3JldHVybiBrPVtdLGV9Y2xhc3MgWXtjb25zdHJ1Y3Rvcih0KXtkKHRoaXMsImluc3RhbmNlIik7ZCh0aGlzLCJtb2R1bGUiKTtkKHRoaXMsIm1lbW9yeSIpO2QodGhpcywiY29udGV4dCIpO2QodGhpcywiZHJpdmUiKTtkKHRoaXMsImluaXRpYWxpemVkIiwhMSk7dGhpcy5jb250ZXh0PXQsdGhpcy5kcml2ZT1uZXcgdHQodC5mcyl9c3RhdGljIGFzeW5jIHN0YXJ0KHQsaSl7Y29uc3Qgbj1uZXcgWShpKSxzPWF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHQse3dhc2lfc25hcHNob3RfcHJldmlldzE6bi5nZXRJbXBvcnRzKCJwcmV2aWV3MSIsaS5kZWJ1Zyksd2FzaV91bnN0YWJsZTpuLmdldEltcG9ydHMoInVuc3RhYmxlIixpLmRlYnVnKX0pO3JldHVybiBuLmluaXQocyksbi5zdGFydCgpfWluaXQodCl7dGhpcy5pbnN0YW5jZT10Lmluc3RhbmNlLHRoaXMubW9kdWxlPXQubW9kdWxlLHRoaXMubWVtb3J5PXRoaXMuaW5zdGFuY2UuZXhwb3J0cy5tZW1vcnksdGhpcy5pbml0aWFsaXplZD0hMH1zdGFydCgpe2lmKCF0aGlzLmluaXRpYWxpemVkKXRocm93IG5ldyBFcnJvcigiV0FTSSBtdXN0IGJlIGluaXRpYWxpemVkIHdpdGggaW5pdCh3YXNtKSBmaXJzdCIpO2NvbnN0IHQ9dGhpcy5pbnN0YW5jZS5leHBvcnRzLl9zdGFydDt0cnl7dCgpfWNhdGNoKGkpe2lmKGkgaW5zdGFuY2VvZiBYKXJldHVybntleGl0Q29kZTppLmNvZGUsZnM6dGhpcy5kcml2ZS5mc307aWYoaSBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcilyZXR1cm57ZXhpdENvZGU6MTM0LGZzOnRoaXMuZHJpdmUuZnN9O3Rocm93IGl9cmV0dXJue2V4aXRDb2RlOjAsZnM6dGhpcy5kcml2ZS5mc319Z2V0SW1wb3J0cyh0LGkpe2NvbnN0IG49e2FyZ3NfZ2V0OnRoaXMuYXJnc19nZXQuYmluZCh0aGlzKSxhcmdzX3NpemVzX2dldDp0aGlzLmFyZ3Nfc2l6ZXNfZ2V0LmJpbmQodGhpcyksY2xvY2tfcmVzX2dldDp0aGlzLmNsb2NrX3Jlc19nZXQuYmluZCh0aGlzKSxjbG9ja190aW1lX2dldDp0aGlzLmNsb2NrX3RpbWVfZ2V0LmJpbmQodGhpcyksZW52aXJvbl9nZXQ6dGhpcy5lbnZpcm9uX2dldC5iaW5kKHRoaXMpLGVudmlyb25fc2l6ZXNfZ2V0OnRoaXMuZW52aXJvbl9zaXplc19nZXQuYmluZCh0aGlzKSxwcm9jX2V4aXQ6dGhpcy5wcm9jX2V4aXQuYmluZCh0aGlzKSxyYW5kb21fZ2V0OnRoaXMucmFuZG9tX2dldC5iaW5kKHRoaXMpLHNjaGVkX3lpZWxkOnRoaXMuc2NoZWRfeWllbGQuYmluZCh0aGlzKSxmZF9hZHZpc2U6dGhpcy5mZF9hZHZpc2UuYmluZCh0aGlzKSxmZF9hbGxvY2F0ZTp0aGlzLmZkX2FsbG9jYXRlLmJpbmQodGhpcyksZmRfY2xvc2U6dGhpcy5mZF9jbG9zZS5iaW5kKHRoaXMpLGZkX2RhdGFzeW5jOnRoaXMuZmRfZGF0YXN5bmMuYmluZCh0aGlzKSxmZF9mZHN0YXRfZ2V0OnRoaXMuZmRfZmRzdGF0X2dldC5iaW5kKHRoaXMpLGZkX2Zkc3RhdF9zZXRfZmxhZ3M6dGhpcy5mZF9mZHN0YXRfc2V0X2ZsYWdzLmJpbmQodGhpcyksZmRfZmRzdGF0X3NldF9yaWdodHM6dGhpcy5mZF9mZHN0YXRfc2V0X3JpZ2h0cy5iaW5kKHRoaXMpLGZkX2ZpbGVzdGF0X2dldDp0aGlzLmZkX2ZpbGVzdGF0X2dldC5iaW5kKHRoaXMpLGZkX2ZpbGVzdGF0X3NldF9zaXplOnRoaXMuZmRfZmlsZXN0YXRfc2V0X3NpemUuYmluZCh0aGlzKSxmZF9maWxlc3RhdF9zZXRfdGltZXM6dGhpcy5mZF9maWxlc3RhdF9zZXRfdGltZXMuYmluZCh0aGlzKSxmZF9wcmVhZDp0aGlzLmZkX3ByZWFkLmJpbmQodGhpcyksZmRfcHJlc3RhdF9kaXJfbmFtZTp0aGlzLmZkX3ByZXN0YXRfZGlyX25hbWUuYmluZCh0aGlzKSxmZF9wcmVzdGF0X2dldDp0aGlzLmZkX3ByZXN0YXRfZ2V0LmJpbmQodGhpcyksZmRfcHdyaXRlOnRoaXMuZmRfcHdyaXRlLmJpbmQodGhpcyksZmRfcmVhZDp0aGlzLmZkX3JlYWQuYmluZCh0aGlzKSxmZF9yZWFkZGlyOnRoaXMuZmRfcmVhZGRpci5iaW5kKHRoaXMpLGZkX3JlbnVtYmVyOnRoaXMuZmRfcmVudW1iZXIuYmluZCh0aGlzKSxmZF9zZWVrOnRoaXMuZmRfc2Vlay5iaW5kKHRoaXMpLGZkX3N5bmM6dGhpcy5mZF9zeW5jLmJpbmQodGhpcyksZmRfdGVsbDp0aGlzLmZkX3RlbGwuYmluZCh0aGlzKSxmZF93cml0ZTp0aGlzLmZkX3dyaXRlLmJpbmQodGhpcykscGF0aF9maWxlc3RhdF9nZXQ6dGhpcy5wYXRoX2ZpbGVzdGF0X2dldC5iaW5kKHRoaXMpLHBhdGhfZmlsZXN0YXRfc2V0X3RpbWVzOnRoaXMucGF0aF9maWxlc3RhdF9zZXRfdGltZXMuYmluZCh0aGlzKSxwYXRoX29wZW46dGhpcy5wYXRoX29wZW4uYmluZCh0aGlzKSxwYXRoX3JlbmFtZTp0aGlzLnBhdGhfcmVuYW1lLmJpbmQodGhpcykscGF0aF91bmxpbmtfZmlsZTp0aGlzLnBhdGhfdW5saW5rX2ZpbGUuYmluZCh0aGlzKSxwYXRoX2NyZWF0ZV9kaXJlY3Rvcnk6dGhpcy5wYXRoX2NyZWF0ZV9kaXJlY3RvcnkuYmluZCh0aGlzKSxwYXRoX2xpbms6dGhpcy5wYXRoX2xpbmsuYmluZCh0aGlzKSxwYXRoX3JlYWRsaW5rOnRoaXMucGF0aF9yZWFkbGluay5iaW5kKHRoaXMpLHBhdGhfcmVtb3ZlX2RpcmVjdG9yeTp0aGlzLnBhdGhfcmVtb3ZlX2RpcmVjdG9yeS5iaW5kKHRoaXMpLHBhdGhfc3ltbGluazp0aGlzLnBhdGhfc3ltbGluay5iaW5kKHRoaXMpLHBvbGxfb25lb2ZmOnRoaXMucG9sbF9vbmVvZmYuYmluZCh0aGlzKSxwcm9jX3JhaXNlOnRoaXMucHJvY19yYWlzZS5iaW5kKHRoaXMpLHNvY2tfYWNjZXB0OnRoaXMuc29ja19hY2NlcHQuYmluZCh0aGlzKSxzb2NrX3JlY3Y6dGhpcy5zb2NrX3JlY3YuYmluZCh0aGlzKSxzb2NrX3NlbmQ6dGhpcy5zb2NrX3NlbmQuYmluZCh0aGlzKSxzb2NrX3NodXRkb3duOnRoaXMuc29ja19zaHV0ZG93bi5iaW5kKHRoaXMpLHNvY2tfb3Blbjp0aGlzLnNvY2tfb3Blbi5iaW5kKHRoaXMpLHNvY2tfbGlzdGVuOnRoaXMuc29ja19saXN0ZW4uYmluZCh0aGlzKSxzb2NrX2Nvbm5lY3Q6dGhpcy5zb2NrX2Nvbm5lY3QuYmluZCh0aGlzKSxzb2NrX3NldHNvY2tvcHQ6dGhpcy5zb2NrX3NldHNvY2tvcHQuYmluZCh0aGlzKSxzb2NrX2JpbmQ6dGhpcy5zb2NrX2JpbmQuYmluZCh0aGlzKSxzb2NrX2dldGxvY2FsYWRkcjp0aGlzLnNvY2tfZ2V0bG9jYWxhZGRyLmJpbmQodGhpcyksc29ja19nZXRwZWVyYWRkcjp0aGlzLnNvY2tfZ2V0cGVlcmFkZHIuYmluZCh0aGlzKSxzb2NrX2dldGFkZHJpbmZvOnRoaXMuc29ja19nZXRhZGRyaW5mby5iaW5kKHRoaXMpfTt0PT09InVuc3RhYmxlIiYmKG4ucGF0aF9maWxlc3RhdF9nZXQ9dGhpcy51bnN0YWJsZV9wYXRoX2ZpbGVzdGF0X2dldC5iaW5kKHRoaXMpLG4uZmRfZmlsZXN0YXRfZ2V0PXRoaXMudW5zdGFibGVfZmRfZmlsZXN0YXRfZ2V0LmJpbmQodGhpcyksbi5mZF9zZWVrPXRoaXMudW5zdGFibGVfZmRfc2Vlay5iaW5kKHRoaXMpKTtmb3IoY29uc3RbcyxhXW9mIE9iamVjdC5lbnRyaWVzKG4pKW5bc109ZnVuY3Rpb24oKXtsZXQgZj1hLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihpKXtjb25zdCBjPWV0KCk7Zj1pKHMsWy4uLmFyZ3VtZW50c10sZixjKT8/Zn1yZXR1cm4gZn07cmV0dXJuIG59Z2V0IGVudkFycmF5KCl7cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29udGV4dC5lbnYpLm1hcCgoW3QsaV0pPT5gJHt0fT0ke2l9YCl9YXJnc19nZXQodCxpKXtjb25zdCBuPW5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpO2Zvcihjb25zdCBzIG9mIHRoaXMuY29udGV4dC5hcmdzKXtuLnNldFVpbnQzMih0LGksITApLHQrPTQ7Y29uc3QgYT1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoYCR7c31cMGApO25ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixpLGEuYnl0ZUxlbmd0aCkuc2V0KGEpLGkrPWEuYnl0ZUxlbmd0aH1yZXR1cm4gci5TVUNDRVNTfWFyZ3Nfc2l6ZXNfZ2V0KHQsaSl7Y29uc3Qgbj10aGlzLmNvbnRleHQuYXJncyxzPW4ucmVkdWNlKChmLGMpPT5mK25ldyBUZXh0RW5jb2RlcigpLmVuY29kZShgJHtjfVwwYCkuYnl0ZUxlbmd0aCwwKSxhPW5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpO3JldHVybiBhLnNldFVpbnQzMih0LG4ubGVuZ3RoLCEwKSxhLnNldFVpbnQzMihpLHMsITApLHIuU1VDQ0VTU31jbG9ja19yZXNfZ2V0KHQsaSl7c3dpdGNoKHQpe2Nhc2UgVC5SRUFMVElNRTpjYXNlIFQuTU9OT1RPTklDOmNhc2UgVC5QUk9DRVNTX0NQVVRJTUVfSUQ6Y2FzZSBULlRIUkVBRF9DUFVUSU1FX0lEOnJldHVybiBuZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKS5zZXRCaWdVaW50NjQoaSxCaWdJbnQoMWU2KSwhMCksci5TVUNDRVNTfXJldHVybiByLkVJTlZBTH1jbG9ja190aW1lX2dldCh0LGksbil7c3dpdGNoKHQpe2Nhc2UgVC5SRUFMVElNRTpjYXNlIFQuTU9OT1RPTklDOmNhc2UgVC5QUk9DRVNTX0NQVVRJTUVfSUQ6Y2FzZSBULlRIUkVBRF9DUFVUSU1FX0lEOnJldHVybiBuZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKS5zZXRCaWdVaW50NjQobix5KG5ldyBEYXRlKSwhMCksci5TVUNDRVNTfXJldHVybiByLkVJTlZBTH1lbnZpcm9uX2dldCh0LGkpe2NvbnN0IG49bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlcik7Zm9yKGNvbnN0IHMgb2YgdGhpcy5lbnZBcnJheSl7bi5zZXRVaW50MzIodCxpLCEwKSx0Kz00O2NvbnN0IGE9bmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGAke3N9XDBgKTtuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsaSxhLmJ5dGVMZW5ndGgpLnNldChhKSxpKz1hLmJ5dGVMZW5ndGh9cmV0dXJuIHIuU1VDQ0VTU31lbnZpcm9uX3NpemVzX2dldCh0LGkpe2NvbnN0IG49dGhpcy5lbnZBcnJheS5yZWR1Y2UoKGEsZik9PmErbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGAke2Z9XDBgKS5ieXRlTGVuZ3RoLDApLHM9bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlcik7cmV0dXJuIHMuc2V0VWludDMyKHQsdGhpcy5lbnZBcnJheS5sZW5ndGgsITApLHMuc2V0VWludDMyKGksbiwhMCksci5TVUNDRVNTfXByb2NfZXhpdCh0KXt0aHJvdyBuZXcgWCh0KX1yYW5kb21fZ2V0KHQsaSl7Y29uc3Qgbj1uZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsdCxpKTtyZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuKSxyLlNVQ0NFU1N9c2NoZWRfeWllbGQoKXtyZXR1cm4gci5TVUNDRVNTfWZkX3JlYWQodCxpLG4scyl7aWYodD09PTF8fHQ9PT0yKXJldHVybiByLkVOT1RTVVA7Y29uc3QgYT1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKSxmPXYoYSxpLG4pLGM9bmV3IFRleHRFbmNvZGVyO2xldCBvPTAsRT1yLlNVQ0NFU1M7Zm9yKGNvbnN0IGggb2YgZil7bGV0IFM7aWYodD09PTApe2NvbnN0IEM9dGhpcy5jb250ZXh0LnN0ZGluKGguYnl0ZUxlbmd0aCk7aWYoIUMpYnJlYWs7Uz1jLmVuY29kZShDKX1lbHNle2NvbnN0W0MsbF09dGhpcy5kcml2ZS5yZWFkKHQsaC5ieXRlTGVuZ3RoKTtpZihDKXtFPUM7YnJlYWt9ZWxzZSBTPWx9Y29uc3QgZz1NYXRoLm1pbihoLmJ5dGVMZW5ndGgsUy5ieXRlTGVuZ3RoKTtoLnNldChTLnN1YmFycmF5KDAsZykpLG8rPWd9cmV0dXJuIFUoe2J5dGVzUmVhZDpvfSksYS5zZXRVaW50MzIocyxvLCEwKSxFfWZkX3dyaXRlKHQsaSxuLHMpe2lmKHQ9PT0wKXJldHVybiByLkVOT1RTVVA7Y29uc3QgYT1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKSxmPXYoYSxpLG4pLGM9bmV3IFRleHREZWNvZGVyO2xldCBvPTAsRT1yLlNVQ0NFU1M7Zm9yKGNvbnN0IGggb2YgZilpZihoLmJ5dGVMZW5ndGghPT0wKXtpZih0PT09MXx8dD09PTIpe2NvbnN0IFM9dD09PTE/dGhpcy5jb250ZXh0LnN0ZG91dDp0aGlzLmNvbnRleHQuc3RkZXJyLGc9Yy5kZWNvZGUoaCk7UyhnKSxVKHtvdXRwdXQ6Z30pfWVsc2UgaWYoRT10aGlzLmRyaXZlLndyaXRlKHQsaCksRSE9ci5TVUNDRVNTKWJyZWFrO28rPWguYnl0ZUxlbmd0aH1yZXR1cm4gYS5zZXRVaW50MzIocyxvLCEwKSxFfWZkX2FkdmlzZSgpe3JldHVybiByLlNVQ0NFU1N9ZmRfYWxsb2NhdGUodCxpLG4pe3JldHVybiB0aGlzLmRyaXZlLnB3cml0ZSh0LG5ldyBVaW50OEFycmF5KE51bWJlcihuKSksTnVtYmVyKGkpKX1mZF9jbG9zZSh0KXtyZXR1cm4gdGhpcy5kcml2ZS5jbG9zZSh0KX1mZF9kYXRhc3luYyh0KXtyZXR1cm4gdGhpcy5kcml2ZS5zeW5jKHQpfWZkX2Zkc3RhdF9nZXQodCxpKXtpZih0PDMpe2xldCBjO2lmKHRoaXMuY29udGV4dC5pc1RUWSl7Y29uc3QgRT14Xl8uRkRfU0VFS15fLkZEX1RFTEw7Yz1WKEEuQ0hBUkFDVEVSX0RFVklDRSwwLEUpfWVsc2UgYz1WKEEuQ0hBUkFDVEVSX0RFVklDRSwwKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksYy5ieXRlTGVuZ3RoKS5zZXQoYyksci5TVUNDRVNTfWlmKCF0aGlzLmRyaXZlLmV4aXN0cyh0KSlyZXR1cm4gci5FQkFERjtjb25zdCBuPXRoaXMuZHJpdmUuZmlsZVR5cGUodCkscz10aGlzLmRyaXZlLmZpbGVGZGZsYWdzKHQpLGE9VihuLHMpO3JldHVybiBuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsaSxhLmJ5dGVMZW5ndGgpLnNldChhKSxyLlNVQ0NFU1N9ZmRfZmRzdGF0X3NldF9mbGFncyh0LGkpe3JldHVybiB0aGlzLmRyaXZlLnNldEZsYWdzKHQsaSl9ZmRfZmRzdGF0X3NldF9yaWdodHMoKXtyZXR1cm4gci5TVUNDRVNTfWZkX2ZpbGVzdGF0X2dldCh0LGkpe3JldHVybiB0aGlzLnNoYXJlZF9mZF9maWxlc3RhdF9nZXQodCxpLCJwcmV2aWV3MSIpfXVuc3RhYmxlX2ZkX2ZpbGVzdGF0X2dldCh0LGkpe3JldHVybiB0aGlzLnNoYXJlZF9mZF9maWxlc3RhdF9nZXQodCxpLCJ1bnN0YWJsZSIpfXNoYXJlZF9mZF9maWxlc3RhdF9nZXQodCxpLG4pe2NvbnN0IHM9bj09PSJ1bnN0YWJsZSI/WjpqO2lmKHQ8Myl7bGV0IEU7c3dpdGNoKHQpe2Nhc2UgMDpFPSIvZGV2L3N0ZGluIjticmVhaztjYXNlIDE6RT0iL2Rldi9zdGRvdXQiO2JyZWFrO2Nhc2UgMjpFPSIvZGV2L3N0ZGVyciI7YnJlYWs7ZGVmYXVsdDpFPSIvZGV2L3VuZGVmaW5lZCI7YnJlYWt9Y29uc3QgaD1zKHtwYXRoOkUsYnl0ZUxlbmd0aDowLHRpbWVzdGFtcHM6e2FjY2VzczpuZXcgRGF0ZSxtb2RpZmljYXRpb246bmV3IERhdGUsY2hhbmdlOm5ldyBEYXRlfSx0eXBlOkEuQ0hBUkFDVEVSX0RFVklDRX0pO3JldHVybiBuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsaSxoLmJ5dGVMZW5ndGgpLnNldChoKSxyLlNVQ0NFU1N9Y29uc3RbYSxmXT10aGlzLmRyaXZlLnN0YXQodCk7aWYoYSE9ci5TVUNDRVNTKXJldHVybiBhO1Uoe3Jlc29sdmVkUGF0aDpmLnBhdGgsc3RhdDpmfSk7Y29uc3QgYz1zKGYpO3JldHVybiBuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsaSxjLmJ5dGVMZW5ndGgpLnNldChjKSxyLlNVQ0NFU1N9ZmRfZmlsZXN0YXRfc2V0X3NpemUodCxpKXtyZXR1cm4gdGhpcy5kcml2ZS5zZXRTaXplKHQsaSl9ZmRfZmlsZXN0YXRfc2V0X3RpbWVzKHQsaSxuLHMpe2xldCBhPW51bGw7cyZtLkFUSU0mJihhPXAoaSkpLHMmbS5BVElNX05PVyYmKGE9bmV3IERhdGUpO2xldCBmPW51bGw7aWYocyZtLk1USU0mJihmPXAobikpLHMmbS5NVElNX05PVyYmKGY9bmV3IERhdGUpLGEpe2NvbnN0IGM9dGhpcy5kcml2ZS5zZXRBY2Nlc3NUaW1lKHQsYSk7aWYoYyE9ci5TVUNDRVNTKXJldHVybiBjfWlmKGYpe2NvbnN0IGM9dGhpcy5kcml2ZS5zZXRNb2RpZmljYXRpb25UaW1lKHQsZik7aWYoYyE9ci5TVUNDRVNTKXJldHVybiBjfXJldHVybiByLlNVQ0NFU1N9ZmRfcHJlYWQodCxpLG4scyxhKXtpZih0PT09MXx8dD09PTIpcmV0dXJuIHIuRU5PVFNVUDtpZih0PT09MClyZXR1cm4gdGhpcy5mZF9yZWFkKHQsaSxuLGEpO2NvbnN0IGY9bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlciksYz12KGYsaSxuKTtsZXQgbz0wLEU9ci5TVUNDRVNTO2Zvcihjb25zdCBoIG9mIGMpe2NvbnN0W1MsZ109dGhpcy5kcml2ZS5wcmVhZCh0LGguYnl0ZUxlbmd0aCxOdW1iZXIocykrbyk7aWYoUyE9PXIuU1VDQ0VTUyl7RT1TO2JyZWFrfWNvbnN0IEM9TWF0aC5taW4oaC5ieXRlTGVuZ3RoLGcuYnl0ZUxlbmd0aCk7aC5zZXQoZy5zdWJhcnJheSgwLEMpKSxvKz1DfXJldHVybiBmLnNldFVpbnQzMihhLG8sITApLEV9ZmRfcHJlc3RhdF9kaXJfbmFtZSh0LGksbil7aWYodCE9PTMpcmV0dXJuIHIuRUJBREY7Y29uc3Qgcz1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoIi8iKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksbikuc2V0KHMuc3ViYXJyYXkoMCxuKSksci5TVUNDRVNTfWZkX3ByZXN0YXRfZ2V0KHQsaSl7aWYodCE9PTMpcmV0dXJuIHIuRUJBREY7Y29uc3Qgbj1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoIi4iKSxzPW5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIsaSk7cmV0dXJuIHMuc2V0VWludDgoMCxHLkRJUikscy5zZXRVaW50MzIoNCxuLmJ5dGVMZW5ndGgsITApLHIuU1VDQ0VTU31mZF9wd3JpdGUodCxpLG4scyxhKXtpZih0PT09MClyZXR1cm4gci5FTk9UU1VQO2lmKHQ9PT0xfHx0PT09MilyZXR1cm4gdGhpcy5mZF93cml0ZSh0LGksbixhKTtjb25zdCBmPW5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLGM9dihmLGksbik7bGV0IG89MCxFPXIuU1VDQ0VTUztmb3IoY29uc3QgaCBvZiBjKWlmKGguYnl0ZUxlbmd0aCE9PTApe2lmKEU9dGhpcy5kcml2ZS5wd3JpdGUodCxoLE51bWJlcihzKSksRSE9ci5TVUNDRVNTKWJyZWFrO28rPWguYnl0ZUxlbmd0aH1yZXR1cm4gZi5zZXRVaW50MzIoYSxvLCEwKSxFfWZkX3JlYWRkaXIodCxpLG4scyxhKXtjb25zdFtmLGNdPXRoaXMuZHJpdmUubGlzdCh0KTtpZihmIT1yLlNVQ0NFU1MpcmV0dXJuIGY7bGV0IG89W10sRT0wO2Zvcihjb25zdHtuYW1lOncsdHlwZTpGfW9mIGMpe2NvbnN0IEs9bnQodyxGLEUpO28ucHVzaChLKSxFKyt9bz1vLnNsaWNlKE51bWJlcihzKSk7Y29uc3QgaD1vLnJlZHVjZSgodyxGKT0+dytGLmJ5dGVMZW5ndGgsMCksUz1uZXcgVWludDhBcnJheShoKTtsZXQgZz0wO2Zvcihjb25zdCB3IG9mIG8pUy5zZXQodyxnKSxnKz13LmJ5dGVMZW5ndGg7Y29uc3QgQz1uZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsaSxuKSxsPVMuc3ViYXJyYXkoMCxuKTtyZXR1cm4gQy5zZXQobCksbmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlcikuc2V0VWludDMyKGEsbC5ieXRlTGVuZ3RoLCEwKSxyLlNVQ0NFU1N9ZmRfcmVudW1iZXIodCxpKXtyZXR1cm4gdGhpcy5kcml2ZS5yZW51bWJlcih0LGkpfWZkX3NlZWsodCxpLG4scyl7Y29uc3RbYSxmXT10aGlzLmRyaXZlLnNlZWsodCxpLG4pO3JldHVybiBhIT09ci5TVUNDRVNTfHwoVSh7bmV3T2Zmc2V0OmYudG9TdHJpbmcoKX0pLG5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLnNldEJpZ1VpbnQ2NChzLGYsITApKSxhfXVuc3RhYmxlX2ZkX3NlZWsodCxpLG4scyl7Y29uc3QgYT1zdFtuXTtyZXR1cm4gdGhpcy5mZF9zZWVrKHQsaSxhLHMpfWZkX3N5bmModCl7cmV0dXJuIHRoaXMuZHJpdmUuc3luYyh0KX1mZF90ZWxsKHQsaSl7Y29uc3RbbixzXT10aGlzLmRyaXZlLnRlbGwodCk7cmV0dXJuIG4hPT1yLlNVQ0NFU1N8fG5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLnNldEJpZ1VpbnQ2NChpLHMsITApLG59cGF0aF9maWxlc3RhdF9nZXQodCxpLG4scyxhKXtyZXR1cm4gdGhpcy5zaGFyZWRfcGF0aF9maWxlc3RhdF9nZXQodCxpLG4scyxhLCJwcmV2aWV3MSIpfXVuc3RhYmxlX3BhdGhfZmlsZXN0YXRfZ2V0KHQsaSxuLHMsYSl7cmV0dXJuIHRoaXMuc2hhcmVkX3BhdGhfZmlsZXN0YXRfZ2V0KHQsaSxuLHMsYSwidW5zdGFibGUiKX1zaGFyZWRfcGF0aF9maWxlc3RhdF9nZXQodCxpLG4scyxhLGYpe2NvbnN0IGM9Zj09PSJ1bnN0YWJsZSI/WjpqLG89bmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixuLHMpKTtVKHtwYXRoOm99KTtjb25zdFtFLGhdPXRoaXMuZHJpdmUucGF0aFN0YXQodCxvKTtpZihFIT1yLlNVQ0NFU1MpcmV0dXJuIEU7Y29uc3QgUz1jKGgpO3JldHVybiBuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsYSxTLmJ5dGVMZW5ndGgpLnNldChTKSxFfXBhdGhfZmlsZXN0YXRfc2V0X3RpbWVzKHQsaSxuLHMsYSxmLGMpe2xldCBvPW51bGw7YyZtLkFUSU0mJihvPXAoYSkpLGMmbS5BVElNX05PVyYmKG89bmV3IERhdGUpO2xldCBFPW51bGw7YyZtLk1USU0mJihFPXAoZikpLGMmbS5NVElNX05PVyYmKEU9bmV3IERhdGUpO2NvbnN0IGg9bmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixuLHMpKTtpZihvKXtjb25zdCBTPXRoaXMuZHJpdmUucGF0aFNldEFjY2Vzc1RpbWUodCxoLG8pO2lmKFMhPXIuU1VDQ0VTUylyZXR1cm4gU31pZihFKXtjb25zdCBTPXRoaXMuZHJpdmUucGF0aFNldE1vZGlmaWNhdGlvblRpbWUodCxoLEUpO2lmKFMhPXIuU1VDQ0VTUylyZXR1cm4gU31yZXR1cm4gci5TVUNDRVNTfXBhdGhfb3Blbih0LGksbixzLGEsZixjLG8sRSl7Y29uc3QgaD1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKSxTPUIodGhpcy5tZW1vcnksbixzKSxnPSEhKGEmTi5DUkVBVCksQz0hIShhJk4uRElSRUNUT1JZKSxsPSEhKGEmTi5FWENMKSxKPSEhKGEmTi5UUlVOQyksdz0hIShvJk8uQVBQRU5EKSxGPSEhKG8mTy5EU1lOQyksSz0hIShvJk8uTk9OQkxPQ0spLFN0PSEhKG8mTy5SU1lOQyksX3Q9ISEobyZPLlNZTkMpO1Uoe3BhdGg6UyxvcGVuRmxhZ3M6e2NyZWF0ZUZpbGVJZk5vbmU6ZyxmYWlsSWZOb3REaXI6QyxmYWlsSWZGaWxlRXhpc3RzOmwsdHJ1bmNhdGVGaWxlOkp9LGZpbGVEZXNjcmlwdG9yRmxhZ3M6e2ZsYWdBcHBlbmQ6dyxmbGFnRFN5bmM6RixmbGFnTm9uQmxvY2s6SyxmbGFnUlN5bmM6U3QsZmxhZ1N5bmM6X3R9fSk7Y29uc3RbUixkdF09dGhpcy5kcml2ZS5vcGVuKHQsUyxhLG8pO3JldHVybiBSfHwoaC5zZXRVaW50MzIoRSxkdCwhMCksUil9cGF0aF9yZW5hbWUodCxpLG4scyxhLGYpe2NvbnN0IGM9Qih0aGlzLm1lbW9yeSxpLG4pLG89Qih0aGlzLm1lbW9yeSxhLGYpO3JldHVybiBVKHtvbGRQYXRoOmMsbmV3UGF0aDpvfSksdGhpcy5kcml2ZS5yZW5hbWUodCxjLHMsbyl9cGF0aF91bmxpbmtfZmlsZSh0LGksbil7Y29uc3Qgcz1CKHRoaXMubWVtb3J5LGksbik7cmV0dXJuIFUoe3BhdGg6c30pLHRoaXMuZHJpdmUudW5saW5rKHQscyl9cG9sbF9vbmVvZmYodCxpLG4scyl7Zm9yKGxldCBmPTA7ZjxuO2YrKyl7Y29uc3QgYz1uZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsdCtmKnoseiksbz1pdChjKSxFPW5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixpK2YqJCwkKTtsZXQgaD0wLFM9ci5TVUNDRVNTO3N3aXRjaChvLnR5cGUpe2Nhc2UgYi5DTE9DSzpmb3IoO25ldyBEYXRlPG8udGltZW91dDspO0Uuc2V0KHJ0KG8udXNlcmRhdGEsci5TVUNDRVNTKSk7YnJlYWs7Y2FzZSBiLkZEX1JFQUQ6aWYoby5mZDwzKW8uZmQ9PT0wPyhTPXIuU1VDQ0VTUyxoPTMyKTpTPXIuRUJBREY7ZWxzZXtjb25zdFtnLENdPXRoaXMuZHJpdmUuc3RhdChvLmZkKTtTPWcsaD1DP0MuYnl0ZUxlbmd0aDowfUUuc2V0KFEoby51c2VyZGF0YSxTLGIuRkRfUkVBRCxCaWdJbnQoaCkpKTticmVhaztjYXNlIGIuRkRfV1JJVEU6aWYoaD0wLFM9ci5TVUNDRVNTLG8uZmQ8MylvLmZkPT09MD9TPXIuRUJBREY6KFM9ci5TVUNDRVNTLGg9MTAyNCk7ZWxzZXtjb25zdFtnLENdPXRoaXMuZHJpdmUuc3RhdChvLmZkKTtTPWcsaD1DP0MuYnl0ZUxlbmd0aDowfUUuc2V0KFEoby51c2VyZGF0YSxTLGIuRkRfUkVBRCxCaWdJbnQoaCkpKTticmVha319cmV0dXJuIG5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIscyw0KS5zZXRVaW50MzIoMCxuLCEwKSxyLlNVQ0NFU1N9cGF0aF9jcmVhdGVfZGlyZWN0b3J5KHQsaSxuKXtjb25zdCBzPUIodGhpcy5tZW1vcnksaSxuKTtyZXR1cm4gdGhpcy5kcml2ZS5wYXRoQ3JlYXRlRGlyKHQscyl9cGF0aF9saW5rKCl7cmV0dXJuIHIuRU5PU1lTfXBhdGhfcmVhZGxpbmsoKXtyZXR1cm4gci5FTk9TWVN9cGF0aF9yZW1vdmVfZGlyZWN0b3J5KCl7cmV0dXJuIHIuRU5PU1lTfXBhdGhfc3ltbGluaygpe3JldHVybiByLkVOT1NZU31wcm9jX3JhaXNlKCl7cmV0dXJuIHIuRU5PU1lTfXNvY2tfYWNjZXB0KCl7cmV0dXJuIHIuRU5PU1lTfXNvY2tfcmVjdigpe3JldHVybiByLkVOT1NZU31zb2NrX3NlbmQoKXtyZXR1cm4gci5FTk9TWVN9c29ja19zaHV0ZG93bigpe3JldHVybiByLkVOT1NZU31zb2NrX29wZW4oKXtyZXR1cm4gci5FTk9TWVN9c29ja19saXN0ZW4oKXtyZXR1cm4gci5FTk9TWVN9c29ja19jb25uZWN0KCl7cmV0dXJuIHIuRU5PU1lTfXNvY2tfc2V0c29ja29wdCgpe3JldHVybiByLkVOT1NZU31zb2NrX2JpbmQoKXtyZXR1cm4gci5FTk9TWVN9c29ja19nZXRsb2NhbGFkZHIoKXtyZXR1cm4gci5FTk9TWVN9c29ja19nZXRwZWVyYWRkcigpe3JldHVybiByLkVOT1NZU31zb2NrX2dldGFkZHJpbmZvKCl7cmV0dXJuIHIuRU5PU1lTfX1jb25zdCB4PV8uRkRfREFUQVNZTkN8Xy5GRF9SRUFEfF8uRkRfU0VFS3xfLkZEX0ZEU1RBVF9TRVRfRkxBR1N8Xy5GRF9TWU5DfF8uRkRfVEVMTHxfLkZEX1dSSVRFfF8uRkRfQURWSVNFfF8uRkRfQUxMT0NBVEV8Xy5QQVRIX0NSRUFURV9ESVJFQ1RPUll8Xy5QQVRIX0NSRUFURV9GSUxFfF8uUEFUSF9MSU5LX1NPVVJDRXxfLlBBVEhfTElOS19UQVJHRVR8Xy5QQVRIX09QRU58Xy5GRF9SRUFERElSfF8uUEFUSF9SRUFETElOS3xfLlBBVEhfUkVOQU1FX1NPVVJDRXxfLlBBVEhfUkVOQU1FX1RBUkdFVHxfLlBBVEhfRklMRVNUQVRfR0VUfF8uUEFUSF9GSUxFU1RBVF9TRVRfU0laRXxfLlBBVEhfRklMRVNUQVRfU0VUX1RJTUVTfF8uRkRfRklMRVNUQVRfR0VUfF8uRkRfRklMRVNUQVRfU0VUX1NJWkV8Xy5GRF9GSUxFU1RBVF9TRVRfVElNRVN8Xy5QQVRIX1NZTUxJTkt8Xy5QQVRIX1JFTU9WRV9ESVJFQ1RPUll8Xy5QQVRIX1VOTElOS19GSUxFfF8uUE9MTF9GRF9SRUFEV1JJVEV8Xy5TT0NLX1NIVVRET1dOfF8uU09DS19BQ0NFUFQ7Y2xhc3MgWCBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGkpe3N1cGVyKCk7ZCh0aGlzLCJjb2RlIik7dGhpcy5jb2RlPWl9fWZ1bmN0aW9uIEIoZSx0LGkpe3JldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoZS5idWZmZXIsdCxpKSl9ZnVuY3Rpb24gdihlLHQsaSl7bGV0IG49QXJyYXkoaSk7Zm9yKGxldCBzPTA7czxpO3MrKyl7Y29uc3QgYT1lLmdldFVpbnQzMih0LCEwKTt0Kz00O2NvbnN0IGY9ZS5nZXRVaW50MzIodCwhMCk7dCs9NCxuW3NdPW5ldyBVaW50OEFycmF5KGUuYnVmZmVyLGEsZil9cmV0dXJuIG59ZnVuY3Rpb24gaXQoZSl7Y29uc3QgdD1uZXcgVWludDhBcnJheSg4KTt0LnNldChlLnN1YmFycmF5KDAsOCkpO2NvbnN0IGk9ZVs4XSxuPW5ldyBEYXRhVmlldyhlLmJ1ZmZlcixlLmJ5dGVPZmZzZXQrOSk7c3dpdGNoKGkpe2Nhc2UgYi5GRF9SRUFEOmNhc2UgYi5GRF9XUklURTpyZXR1cm57dXNlcmRhdGE6dCx0eXBlOmksZmQ6bi5nZXRVaW50MzIoMCwhMCl9O2Nhc2UgYi5DTE9DSzpjb25zdCBzPW4uZ2V0VWludDE2KDI0LCEwKSxhPXkobmV3IERhdGUpLGY9bi5nZXRCaWdVaW50NjQoOCwhMCksYz1uLmdldEJpZ1VpbnQ2NCgxNiwhMCksbz1zJnEuU1VCU0NSSVBUSU9OX0NMT0NLX0FCU1RJTUU/ZjphK2Y7cmV0dXJue3VzZXJkYXRhOnQsdHlwZTppLGlkOm4uZ2V0VWludDMyKDAsITApLHRpbWVvdXQ6cChvKSxwcmVjaXNpb246cChvK2MpfX19ZnVuY3Rpb24gaihlKXtjb25zdCB0PW5ldyBVaW50OEFycmF5KFcpLGk9bmV3IERhdGFWaWV3KHQuYnVmZmVyKTtyZXR1cm4gaS5zZXRCaWdVaW50NjQoMCxCaWdJbnQoMCksITApLGkuc2V0QmlnVWludDY0KDgsQmlnSW50KEgoZS5wYXRoKSksITApLGkuc2V0VWludDgoMTYsZS50eXBlKSxpLnNldEJpZ1VpbnQ2NCgyNCxCaWdJbnQoMSksITApLGkuc2V0QmlnVWludDY0KDMyLEJpZ0ludChlLmJ5dGVMZW5ndGgpLCEwKSxpLnNldEJpZ1VpbnQ2NCg0MCx5KGUudGltZXN0YW1wcy5hY2Nlc3MpLCEwKSxpLnNldEJpZ1VpbnQ2NCg0OCx5KGUudGltZXN0YW1wcy5tb2RpZmljYXRpb24pLCEwKSxpLnNldEJpZ1VpbnQ2NCg1Nix5KGUudGltZXN0YW1wcy5jaGFuZ2UpLCEwKSx0fWZ1bmN0aW9uIFooZSl7Y29uc3QgdD1uZXcgVWludDhBcnJheShXKSxpPW5ldyBEYXRhVmlldyh0LmJ1ZmZlcik7cmV0dXJuIGkuc2V0QmlnVWludDY0KDAsQmlnSW50KDApLCEwKSxpLnNldEJpZ1VpbnQ2NCg4LEJpZ0ludChIKGUucGF0aCkpLCEwKSxpLnNldFVpbnQ4KDE2LGUudHlwZSksaS5zZXRVaW50MzIoMjAsMSwhMCksaS5zZXRCaWdVaW50NjQoMjQsQmlnSW50KGUuYnl0ZUxlbmd0aCksITApLGkuc2V0QmlnVWludDY0KDMyLHkoZS50aW1lc3RhbXBzLmFjY2VzcyksITApLGkuc2V0QmlnVWludDY0KDQwLHkoZS50aW1lc3RhbXBzLm1vZGlmaWNhdGlvbiksITApLGkuc2V0QmlnVWludDY0KDQ4LHkoZS50aW1lc3RhbXBzLmNoYW5nZSksITApLHR9ZnVuY3Rpb24gVihlLHQsaSl7Y29uc3Qgbj1pPz94LHM9aT8/eCxhPW5ldyBVaW50OEFycmF5KDI0KSxmPW5ldyBEYXRhVmlldyhhLmJ1ZmZlciwwLDI0KTtyZXR1cm4gZi5zZXRVaW50OCgwLGUpLGYuc2V0VWludDMyKDIsdCwhMCksZi5zZXRCaWdVaW50NjQoOCxuLCEwKSxmLnNldEJpZ1VpbnQ2NCgxNixzLCEwKSxhfWZ1bmN0aW9uIG50KGUsdCxpKXtjb25zdCBuPW5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShlKSxzPTI0K24uYnl0ZUxlbmd0aCxhPW5ldyBVaW50OEFycmF5KHMpLGY9bmV3IERhdGFWaWV3KGEuYnVmZmVyKTtyZXR1cm4gZi5zZXRCaWdVaW50NjQoMCxCaWdJbnQoaSsxKSwhMCksZi5zZXRCaWdVaW50NjQoOCxCaWdJbnQoSChlKSksITApLGYuc2V0VWludDMyKDE2LG4ubGVuZ3RoLCEwKSxmLnNldFVpbnQ4KDIwLHQpLGEuc2V0KG4sMjQpLGF9ZnVuY3Rpb24gcnQoZSx0KXtjb25zdCBpPW5ldyBVaW50OEFycmF5KDMyKTtpLnNldChlLDApO2NvbnN0IG49bmV3IERhdGFWaWV3KGkuYnVmZmVyKTtyZXR1cm4gbi5zZXRVaW50MTYoOCx0LCEwKSxuLnNldFVpbnQxNigxMCxiLkNMT0NLLCEwKSxpfWZ1bmN0aW9uIFEoZSx0LGksbil7Y29uc3Qgcz1uZXcgVWludDhBcnJheSgzMik7cy5zZXQoZSwwKTtjb25zdCBhPW5ldyBEYXRhVmlldyhzLmJ1ZmZlcik7cmV0dXJuIGEuc2V0VWludDE2KDgsdCwhMCksYS5zZXRVaW50MTYoMTAsaSwhMCksYS5zZXRCaWdVaW50NjQoMTYsbiwhMCksc31mdW5jdGlvbiBIKGUsdD0wKXtsZXQgaT0zNzM1OTI4NTU5XnQsbj0xMTAzNTQ3OTkxXnQ7Zm9yKGxldCBzPTAsYTtzPGUubGVuZ3RoO3MrKylhPWUuY2hhckNvZGVBdChzKSxpPU1hdGguaW11bChpXmEsMjY1NDQzNTc2MSksbj1NYXRoLmltdWwobl5hLDE1OTczMzQ2NzcpO3JldHVybiBpPU1hdGguaW11bChpXmk+Pj4xNiwyMjQ2ODIyNTA3KV5NYXRoLmltdWwobl5uPj4+MTMsMzI2NjQ4OTkwOSksbj1NYXRoLmltdWwobl5uPj4+MTYsMjI0NjgyMjUwNyleTWF0aC5pbXVsKGleaT4+PjEzLDMyNjY0ODk5MDkpLDQyOTQ5NjcyOTYqKDIwOTcxNTEmbikrKGk+Pj4wKX1mdW5jdGlvbiB5KGUpe3JldHVybiBCaWdJbnQoZS5nZXRUaW1lKCkpKkJpZ0ludCgxZTYpfWZ1bmN0aW9uIHAoZSl7cmV0dXJuIG5ldyBEYXRlKE51bWJlcihlL0JpZ0ludCgxZTYpKSl9Y29uc3Qgc3Q9e1tNLkNVUl06RC5DVVIsW00uRU5EXTpELkVORCxbTS5TRVRdOkQuU0VUfTtjbGFzcyBhdHtjb25zdHJ1Y3Rvcih0KXtkKHRoaXMsImZzIik7ZCh0aGlzLCJhcmdzIik7ZCh0aGlzLCJlbnYiKTtkKHRoaXMsInN0ZGluIik7ZCh0aGlzLCJzdGRvdXQiKTtkKHRoaXMsInN0ZGVyciIpO2QodGhpcywiZGVidWciKTtkKHRoaXMsImlzVFRZIik7dGhpcy5mcz0odD09bnVsbD92b2lkIDA6dC5mcyk/P3t9LHRoaXMuYXJncz0odD09bnVsbD92b2lkIDA6dC5hcmdzKT8/W10sdGhpcy5lbnY9KHQ9PW51bGw/dm9pZCAwOnQuZW52KT8/e30sdGhpcy5zdGRpbj0odD09bnVsbD92b2lkIDA6dC5zdGRpbik/PygoKT0+bnVsbCksdGhpcy5zdGRvdXQ9KHQ9PW51bGw/dm9pZCAwOnQuc3Rkb3V0KT8/KCgpPT57fSksdGhpcy5zdGRlcnI9KHQ9PW51bGw/dm9pZCAwOnQuc3RkZXJyKT8/KCgpPT57fSksdGhpcy5kZWJ1Zz10PT1udWxsP3ZvaWQgMDp0LmRlYnVnLHRoaXMuaXNUVFk9ISEodCE9bnVsbCYmdC5pc1RUWSl9fW9ubWVzc2FnZT1hc3luYyBlPT57Y29uc3QgdD1lLmRhdGE7c3dpdGNoKHQudHlwZSl7Y2FzZSJzdGFydCI6dHJ5e2NvbnN0IGk9YXdhaXQgZnQodC5iaW5hcnlVUkwsdC5zdGRpbkJ1ZmZlcix0KTtMKHt0YXJnZXQ6Imhvc3QiLHR5cGU6InJlc3VsdCIscmVzdWx0Oml9KX1jYXRjaChpKXtsZXQgbjtpIGluc3RhbmNlb2YgRXJyb3I/bj17bWVzc2FnZTppLm1lc3NhZ2UsdHlwZTppLmNvbnN0cnVjdG9yLm5hbWV9Om49e21lc3NhZ2U6YHVua25vd24gZXJyb3IgLSAke2l9YCx0eXBlOiJVbmtub3duIn0sTCh7dGFyZ2V0OiJob3N0Iix0eXBlOiJjcmFzaCIsZXJyb3I6bn0pfWJyZWFrfX07ZnVuY3Rpb24gTChlKXtwb3N0TWVzc2FnZShlKX1hc3luYyBmdW5jdGlvbiBmdChlLHQsaSl7cmV0dXJuIFkuc3RhcnQoZmV0Y2goZSksbmV3IGF0KHsuLi5pLHN0ZG91dDpvdCxzdGRlcnI6Y3Qsc3RkaW46bj0+aHQobix0KSxkZWJ1ZzpFdH0pKX1mdW5jdGlvbiBvdChlKXtMKHt0YXJnZXQ6Imhvc3QiLHR5cGU6InN0ZG91dCIsdGV4dDplfSl9ZnVuY3Rpb24gY3QoZSl7TCh7dGFyZ2V0OiJob3N0Iix0eXBlOiJzdGRlcnIiLHRleHQ6ZX0pfWZ1bmN0aW9uIEV0KGUsdCxpLG4pe3JldHVybiBuPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobikpLEwoe3RhcmdldDoiaG9zdCIsdHlwZToiZGVidWciLG5hbWU6ZSxhcmdzOnQscmV0OmksZGF0YTpufSksaX1mdW5jdGlvbiBodChlLHQpe0F0b21pY3Mud2FpdChuZXcgSW50MzJBcnJheSh0KSwwLDApO2NvbnN0IGk9bmV3IERhdGFWaWV3KHQpLG49aS5nZXRJbnQzMigwKTtpZihuPDApcmV0dXJuIGkuc2V0SW50MzIoMCwwKSxudWxsO2NvbnN0IHM9bmV3IFVpbnQ4QXJyYXkodCw0LG4pLGE9bmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHMuc2xpY2UoMCxlKSksZj1zLnNsaWNlKGUscy5sZW5ndGgpO3JldHVybiBpLnNldEludDMyKDAsZi5ieXRlTGVuZ3RoKSxzLnNldChmKSxhfX0pKCk7Cg==", j = typeof window < "u" && window.Blob && new Blob([atob(tt)], { type: "text/javascript;charset=utf-8" });
function ut() {
  let e;
  try {
    if (e = j && (window.URL || window.webkitURL).createObjectURL(j), !e)
      throw "";
    return new Worker(e);
  } catch {
    return new Worker("data:application/javascript;base64," + tt);
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
function ot(e, t) {
  e.postMessage(t);
}
class St extends Error {
}
class Gt {
  constructor(t, i) {
    m(this, "binaryURL");
    // 8kb should be big enough
    m(this, "stdinBuffer", new SharedArrayBuffer(8 * 1024));
    m(this, "context");
    m(this, "result");
    m(this, "worker");
    m(this, "reject");
    this.binaryURL = t, this.context = i;
  }
  async start() {
    if (this.result)
      throw new Error("WASIWorker Host can only be started once");
    return this.result = new Promise((t, i) => {
      this.reject = i, this.worker = new ut(), this.worker.addEventListener("message", (n) => {
        var s, d, V, a, Z, h;
        const l = n.data;
        switch (l.type) {
          case "stdout":
            (d = (s = this.context).stdout) == null || d.call(s, l.text);
            break;
          case "stderr":
            (a = (V = this.context).stderr) == null || a.call(V, l.text);
            break;
          case "debug":
            (h = (Z = this.context).debug) == null || h.call(
              Z,
              l.name,
              l.args,
              l.ret,
              l.data
            );
            break;
          case "result":
            t(l.result);
            break;
          case "crash":
            i(l.error);
            break;
        }
      }), ot(this.worker, {
        target: "client",
        type: "start",
        binaryURL: this.binaryURL,
        stdinBuffer: this.stdinBuffer,
        // Unfortunately can't just splat these because it includes types
        // that can't be sent as a message.
        args: this.context.args,
        env: this.context.env,
        fs: this.context.fs,
        isTTY: this.context.isTTY
      });
    }), this.result;
  }
  kill() {
    var t;
    if (!this.worker)
      throw new Error("WASIWorker has not started");
    this.worker.terminate(), (t = this.reject) == null || t.call(this, new St("WASI Worker was killed"));
  }
  async pushStdin(t) {
    const i = new DataView(this.stdinBuffer);
    for (; i.getInt32(0) !== 0; )
      await new Promise((s) => setTimeout(s, 0));
    const n = new TextEncoder().encode(t);
    new Uint8Array(this.stdinBuffer, 4).set(n), i.setInt32(0, n.byteLength), Atomics.notify(new Int32Array(this.stdinBuffer), 0);
  }
  async pushEOF() {
    const t = new DataView(this.stdinBuffer);
    for (; t.getInt32(0) !== 0; )
      await new Promise((i) => setTimeout(i, 0));
    t.setInt32(0, -1), Atomics.notify(new Int32Array(this.stdinBuffer), 0);
  }
}
export {
  q as WASI,
  Xt as WASIContext,
  bt as WASISnapshotPreview1,
  Gt as WASIWorkerHost,
  St as WASIWorkerHostKilledError
};
